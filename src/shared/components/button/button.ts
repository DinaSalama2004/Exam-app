import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {


  @Input() label = 'Button';

  @Input() severity:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'help'
    | 'contrast' = 'primary';

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() loading = false;

  @Input() disabled = false;
}
