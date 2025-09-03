import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IArticleInput } from '../../Shared/Feed/Models/IArticleInput';
import { map, Observable } from 'rxjs';
import { IArticle } from './../Models/IArticle';
import { environment } from '../../../environments/environment';
import { ISaveArticleResponse } from '../../Shared/Feed/Models/ISaveArticleResponse';

@Injectable({
  providedIn: 'root',
})
export class CreateArticleService {
  private httpClien = inject(HttpClient);

  createArticle(articleInput: Partial<IArticleInput>): Observable<IArticle> {
    const fullUrl = environment.apiUrl + '/articles';
    return this.httpClien
      .post<ISaveArticleResponse>(fullUrl, articleInput)
      .pipe(map((response: ISaveArticleResponse) => response.article));
  }
}
