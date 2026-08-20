import { Component } from '@angular/core';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from './../../../../shared/components/input-component/input-component';

@Component({
  selector: 'app-create-account',
  imports: [Button , InputComponent , AuthLayout],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export class CreateAccount {}
