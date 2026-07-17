import { ButtonDesignTokens } from './../../node_modules/@primeuix/themes/types/button/index.d';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , ButtonModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exam-app');
}
