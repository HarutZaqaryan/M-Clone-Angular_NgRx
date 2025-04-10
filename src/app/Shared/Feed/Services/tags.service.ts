import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ITagsResponse } from '../Models/ITags';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private http = inject(HttpClient);

  getTags(apiUrl: string): Observable<ITagsResponse> {
    const fullUrl = environment.apiUrl + apiUrl;

    return this.http.get<ITagsResponse>(fullUrl);
  }
}
