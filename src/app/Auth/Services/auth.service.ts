import { inject, Injectable } from '@angular/core';
import { IRegisterRequest } from '../Models/IRegisterRequest';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from '../../Shared/Feed/Models/ICurrentUser';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse } from '../Models/IAuthResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  constructor() {}

  public register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user));
  }
}
