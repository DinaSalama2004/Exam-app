import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink  ,Router} from '@angular/router';

import { Button } from '../../../../shared/components/button/button';
import { AuthLayout } from '../../../../shared/layouts/auth-layout/auth-layout';
import { InputComponent } from '../../../../shared/components/input-component/input-component';

@Component({
  selector: 'app-user-info',
  imports: [Button, InputComponent, AuthLayout, RouterLink, FormsModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {

    constructor(private router: Router) {}

  next(){
    this.router.navigate(['/password']);
  }
}
