import { Routes } from '@angular/router';
import { Login } from '../presentation/auth/pages/login/login';
import { CreateAccount } from '../presentation/auth/pages/create-account/create-account';
import { ForgotPassword } from '../presentation/auth/pages/forgot-password/forgot-password';
import { CreateNewPassword } from '../presentation/auth/pages/create-new-password/create-new-password';
import { PasswordReset } from '../presentation/auth/pages/password-reset/password-reset';


export const routes: Routes = [

{
       path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },


  {
    path: 'create-account',
    component: CreateAccount
  },

  {
    path: 'forgot-password',
    component: ForgotPassword
  },

  {
    path: 'password-reset',
    component: PasswordReset
  },

  {
    path: 'create-new-password',
    component: CreateNewPassword
  },
  
  {
    path: '**',
    redirectTo: 'login'
  } 
];



