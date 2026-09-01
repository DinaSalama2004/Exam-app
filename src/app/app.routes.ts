import { Routes } from '@angular/router';
import { Login } from '../presentation/auth/pages/login/login';
import { CreateAccount } from '../presentation/auth/pages/create-account/create-account';
import { ForgotPassword } from '../presentation/auth/pages/forgot-password/forgot-password';
import { CreateNewPassword } from '../presentation/auth/pages/create-new-password/create-new-password';
import { PasswordReset } from '../presentation/auth/pages/password-reset/password-reset';
import { VerifyEmail } from '../presentation/auth/pages/verify-email/verify-email';
import { UserInfo } from '../presentation/auth/pages/user-info/user-info';
import { Password } from '../presentation/auth/pages/password/password';
import { VerifyOtp } from '../presentation/auth/pages/verify-otp/verify-otp';


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
    path: 'verify-email',
    component: VerifyEmail
  },

  {
    path: 'user-info',
    component: UserInfo
  },

  {
    path: 'password',
    component: Password
  },

  {
    path: 'verify-otp',
    component: VerifyOtp
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



