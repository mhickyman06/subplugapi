import { ErrorComponent } from './ErrorHandeler';
import { environment } from './../../environments/environment.prod';
import { RegisterModel } from './../models/RegisterModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { 

  }

  Register(model:RegisterModel){
      const data = {
        firtsName: model.firstName,
        lastName: model.lastName,
        phone: model.phone,
        email:model.email,
        password: model.confirmPassword
      }
     return this.httpClient.post(environment.api_Url+"Authentication/Register",data)
      .pipe((retry(2)),catchError(ErrorComponent.errorHandler))
  }

}
