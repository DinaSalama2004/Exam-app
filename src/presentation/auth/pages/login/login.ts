import { InputComponent } from './../../../../shared/components/input-component/input-component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-login',
  imports: [  InputComponent  , Button  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
