import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { login, ResgiterModel } from '../model/interfaces/resgiterModel';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiMethod } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
httpClient = inject(HttpClient);  
constructor() { }
public registerCustomer(payload:ResgiterModel):Observable<ResgiterModel>{
  return this.httpClient.post<ResgiterModel>((environment as any).api+ApiMethod.LOGIN,payload);
}
public login(payload:login):Observable<login>{
  return this.httpClient.post<login>((environment as any).api+ApiMethod.SIGNIN,payload);
}
}
