import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

/**
 * Documentation officielle:
 * https://angular.io/guide/reactive-forms
 */

/**
* Autres sources:
* https://indepth.dev/posts/1311/the-update-on-option-in-angular-forms
*/
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
  emailFormControl = new FormGroup({
    fullName: new FormControl('', { validators: [Validators.required, Validators.email], updateOn: 'blur', }),
    email: new FormControl('', { updateOn: 'submit' }),
  });

  myUser: User = { email: "plop" };
}
