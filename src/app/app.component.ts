import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AnchorComponent } from './components/anchor/anchor.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, AnchorComponent]
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
