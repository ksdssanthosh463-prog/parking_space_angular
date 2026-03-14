import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Home } from './features/home/home';
import { Register } from './features/auth/register/register';

export const routes: Routes = [

 {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:Home
    },
    {
        path:'register',
        component:Register
    },
    {
        path:'login',
        component:Login
    },

];
