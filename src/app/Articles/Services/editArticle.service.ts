import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArticle } from '../Models/IArticle';
import { IArticleInput } from '../../Shared/Feed/Models/IArticleInput';
import { environment } from '../../../environments/environment';
import { ISaveArticleResponse } from '../../Shared/Feed/Models/ISaveArticleResponse';

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  private httpClien = inject(HttpClient);

  editArticle(
    slug: string,
    articleInput: Partial<IArticleInput>
  ): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.httpClien
      .put<ISaveArticleResponse>(fullUrl, { article: articleInput })
      .pipe(map((response: ISaveArticleResponse) => response.article));
  }
}
