import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'fpassword',
    loadComponent: () => import('./fpassword/fpassword.page').then( m => m.FpasswordPage)
  },
  {
    path: 'caccount',
    loadComponent: () => import('./caccount/caccount.page').then( m => m.CaccountPage)
  },
];
