import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { GlobalConstants } from '../constants/constants';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const userData = localStorage.getItem(GlobalConstants.Local_Key_Admin);
  const router=inject(Router)

  if (userData!=null) {
     return true;

  }
  else{
   router.navigate(['/login']);
    return false;
  }
};
