import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-component',
  imports: [FormsModule, InputTextModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {



   @Input() label = '';

  @Input() placeholder = '';

  @Input() type = 'text';

  @Input() value = '';
}
