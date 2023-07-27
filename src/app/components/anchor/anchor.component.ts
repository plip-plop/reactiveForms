import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent {

  @Input()
  pathUrl !: string;
}
