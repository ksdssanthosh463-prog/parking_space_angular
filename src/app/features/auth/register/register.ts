import { Component, computed, inject, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  authService=inject(AuthService);
  router=inject(Router);
fullName = signal('');
  email = signal('');
  phoneNumber = signal('');
  password = signal('');
  city = signal('');
  roleId = signal(2);
  isNameValid = computed(() => {
    const name = this.fullName().trim();
    const nameRegex = /^[a-zA-Z ]{3,30}$/; 
    return nameRegex.test(name);
  });
  isEmailValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email());
  });

  isPasswordValid = computed(() => {
    return this.password().length >= 8;
  });

  isPhoneValid = computed(() => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(this.phoneNumber());
  });
  canSubmit = computed(() => {
    const valid = this.isNameValid() && 
                  this.isPhoneValid() && 
                  this.isEmailValid() && 
                  this.isPasswordValid();
    
    console.log('Validation Status:', {
      name: this.isNameValid(),
      phone: this.isPhoneValid(),
      email: this.isEmailValid(),
      password: this.isPasswordValid()
    });
    
    return valid;
  });
  nameTouched = signal(false);
 
  OnRegister(){
    if(this.canSubmit()){

    
    const payload = {
      userId: 0, // Backend usually ignores this on create
      fullName: this.fullName(),
      email: this.email(),
      phoneNumber: this.phoneNumber(),
      passwordHash: this.password(), // In a real app, backend handles hashing
      roleId: this.roleId(),
      city: this.city(),
      isActive: true,
      createdDate: new Date().toISOString() // Current timestamp in ISO format
    };
    this.authService.registerCustomer(payload).subscribe((res:any)=>{
      if(res.message=='User created successfully'){
        alert('User Created');
        this.router.navigate(['/login']);
        this.fullName.set('');
  this.email.set('');
  this.phoneNumber.set('');
  this.password.set('');
  this.city.set('');
      }
    })

  }
  }
}
