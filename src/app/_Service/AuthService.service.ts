import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

   baseUrl = 'https://localhost:44360/api/Auth/';

constructor(private http: HttpClient) { }


Login(model: any) {

  return this.http.post(this.baseUrl + 'Login', model)
  .pipe(map((Response: any) => {
    const user = Response;
    if (user)
    {
    localStorage.setItem('Token', user.Token);
    }
  } ) );

}

}



