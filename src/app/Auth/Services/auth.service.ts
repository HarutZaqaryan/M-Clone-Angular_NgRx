import { inject, Injectable } from '@angular/core';
import { IRegisterRequest } from '../Models/IRegisterRequest';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from '../../Shared/Feed/Models/ICurrentUser';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse } from '../Models/IAuthResponse';
import { environment } from '../../../environments/environment';
import { ILoginRequest } from '../Models/ILoginRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.apiUrl + '/users';

  private http = inject(HttpClient);
  constructor() {}

  private getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  public register(data: IRegisterRequest): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>(this.url, data)
      .pipe(map(this.getUser));
  }

  public login(data: ILoginRequest): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>(this.url, data)
      .pipe(map(this.getUser));
  }
}
