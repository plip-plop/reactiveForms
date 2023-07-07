import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { tap } from 'rxjs/operators';
import { ChildComponent } from "./components/child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule, ChildComponent]
})
export class AppComponent implements OnInit {
  title = 'reactiveForms';

  plop = new FormControl('myplop', Validators.required);
  plip = new FormControl('myplip', Validators.required);

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  stateForm = new FormGroup({
    city: new FormControl('DefaultCity', Validators.required),
    addressForm: new FormGroup({
      zip: new FormControl('DefaultZipCode', Validators.required),
    })
  });

  // Méthode "get" sur le formGroup imbriqué du parent: nécessaire pour alimenter le composant enfant!
  get addressForm() {
		return this.stateForm.get("addressForm") as FormGroup;
	}

  ngOnInit(): void {
    this.profileForm.valueChanges.pipe(
      tap(console.log)
    ).subscribe();

    this.stateForm.valueChanges.pipe(
      tap(console.log)
    ).subscribe();
  }

  onSubmit() {
    console.log("Submit!");
  }
}
