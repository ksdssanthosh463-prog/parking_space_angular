import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 http=inject(HttpClient);
  router=inject(Router);
  authService=inject(AuthService);
  route=inject(ActivatedRoute)
  showPassword:boolean=false;
loginDetails={
  email:'',
  passwordHash:''
}
constructor(){}
loginForm(){
this.authService.login(this.loginDetails).subscribe({
  next:(res:any)=>{
   localStorage.setItem('user',JSON.stringify(res.data));
   alert('Login Successfull');
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  this.router.navigate([returnUrl]);
  //  this.router.navigate(['/dashboard']);
  },
  error:(err:any)=>{
    alert('Invalid User')
    

  }
});

this.loginDetails={
   email:'',
  passwordHash:''
}
}
togglePassword(){
  this.showPassword=!this.showPassword
}
}
