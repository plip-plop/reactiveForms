import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './custom-validators';

interface User {
  email: string;
}

@Component({
  selector: 'app-adv-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './adv-form.component.html',
  styleUrls: ['./adv-form.component.css']
})
export class AdvFormComponent {
  /**
   * FormGroup: Détails.
   * validators: Logique de validation du champ (Validator unique ou array de Validators).
   * updateOn: Quand updater la valeur du formControl ? ('change' | 'blur' | 'submit')
   */
  emailForm = new FormGroup({
    fullName: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'blur', }),
    email: new FormControl('', { updateOn: 'submit' }),
  });

  plopForm = new FormGroup({
    name: new FormControl('', { validators: [forbiddenNameValidator(/Gargamel/i)], updateOn: 'blur', }),
  });

  myUser: User = { email: "plop" };
}
