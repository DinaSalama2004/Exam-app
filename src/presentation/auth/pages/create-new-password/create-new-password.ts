import { Component } from '@angular/core';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from './../../../../shared/components/input-component/input-component';

@Component({
  selector: 'app-create-new-password',
  imports: [Button , AuthLayout , InputComponent],
  templateUrl: './create-new-password.html',
  styleUrl: './create-new-password.css',
})
export class CreateNewPassword {}
