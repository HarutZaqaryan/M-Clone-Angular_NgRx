import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeedResponse } from '../Models/IFeed';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private http = inject(HttpClient);

  getFeed(apiUrl: string): Observable<IFeedResponse> {
    const fullUrl = environment.apiUrl + apiUrl;

    return this.http.get<IFeedResponse>(fullUrl);
  }
}
