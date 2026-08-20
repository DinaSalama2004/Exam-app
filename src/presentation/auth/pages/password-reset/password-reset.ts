import { Component } from '@angular/core';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from './../../../../shared/components/input-component/input-component';

@Component({
  selector: 'app-password-reset',
  imports: [ Button , AuthLayout , InputComponent],
  templateUrl: './password-reset.html',
  styleUrl: './password-reset.css',
})
export class PasswordReset {}
