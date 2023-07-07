import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {

  constructor(readonly router: Router) {

  }
  goNestedForm() {
    this.router.navigateByUrl('nested-forms');
   }

  goAdvancedForm() {
    this.router.navigateByUrl('advanced-forms');
   }
}
