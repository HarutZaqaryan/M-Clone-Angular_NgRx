import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IArticleResponse } from '../Models/IArticleResponse';
import { IArticle } from '../../../Articles/Models/IArticle';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailsService {
  private http = inject(HttpClient);

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .get<IArticleResponse>(fullUrl)
      .pipe(map((res) => res.article));
  }
}
