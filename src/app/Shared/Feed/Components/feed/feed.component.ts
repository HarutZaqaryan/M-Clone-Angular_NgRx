import { Component, effect, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFeedAction } from '../../Store/actions/getFeed.actions';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../Store/selectors/feedSelectors';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IFeedResponse } from '../../Models/IFeed';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingComponent } from '../loading/loading.component';
import { MOCKED_ARTICLES } from '../../../../Mocks/mocked-articles';
import { PaginationComponent } from '../pagination/pagination.component';
import { environment } from '../../../../../environments/environment';
import queryString from 'query-string';
@Component({
  selector: 'ms-feed',
  standalone: true,
  imports: [
    RouterModule,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  apiUrl = input<string>('', { alias: 'apiUrlProps' });

  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected isLoading$ = this.store.selectSignal(isLoadingSelector);
  protected feedData$ = this.store.selectSignal(feedSelector);
  protected feedError$ = this.store.selectSignal(errorSelector);

  protected itemsPerPage = environment.itemsPerPage;
  protected baseUrl = this.router.url.split('?')[0];
  protected currentPage = 1;

  constructor() {
    effect(
      () => {
        this.fetchData();
        this.route.queryParams.subscribe((params) => {
          this.currentPage = Number(params['page']) || 1;
          this.fetchData();
        });
      },
      { allowSignalWrites: true }
    );
  }

  fetchData(): void {
    const offset = this.currentPage * this.itemsPerPage - this.itemsPerPage;
    const parsedUrl = queryString.parseUrl(this.apiUrl());
    const strigifiedParams = queryString.stringify({
      limit: this.itemsPerPage,
      offset,
      ...parsedUrl.query,
    });
    const preparedApiUrl = `${parsedUrl.url}?${strigifiedParams}`;
    this.store.dispatch(getFeedAction({ url: preparedApiUrl }));
  }
}
