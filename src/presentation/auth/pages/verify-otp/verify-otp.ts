import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from '../../../../shared/components/input-component/input-component';

@Component({
  selector: 'app-verify-otp',
  imports: [Button, InputComponent, AuthLayout, RouterLink, FormsModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOtp {


    constructor(private router: Router) {}

  next(){
    this.router.navigate(['/user-info']);
  }
}
