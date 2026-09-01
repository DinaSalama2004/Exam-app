import { Component } from '@angular/core';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from './../../../../shared/components/input-component/input-component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [Button , InputComponent , AuthLayout, RouterLink],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export class CreateAccount {


  constructor(private router: Router) {}

  next(){
    this.router.navigate(['/verify-otp']);
  }
}
