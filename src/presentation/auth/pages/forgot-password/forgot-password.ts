import { Component } from '@angular/core';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from './../../../../shared/components/input-component/input-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [ Button , AuthLayout , InputComponent ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {


  constructor(private router: Router) {}

  next(){
    this.router.navigate(['/password-reset']);
  }
}
