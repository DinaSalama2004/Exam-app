import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from '../../../../shared/components/input-component/input-component';

@Component({
  selector: 'app-password',
  imports: [Button, InputComponent, AuthLayout, RouterLink, FormsModule],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {


  constructor(private router: Router) {}


  continue(){

    this.router.navigate(['/login']);
  }
}

