import { Component, effect, inject, input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFeedAction } from '../../Store/actions/getFeed.actions';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../Store/selectors/feedSelectors';
import { RouterModule } from '@angular/router';
import { IArticle } from '../../../../Articles/Models/IArticle';
import { IFeedResponse } from '../../Models/IFeed';
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'ms-feed',
  standalone: true,
  imports: [RouterModule, ErrorMessageComponent, LoadingComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  apiUrl = input<string>('', { alias: 'apiUrlProps' });

  private readonly store = inject(Store);

  protected isLoading$ = this.store.selectSignal(isLoadingSelector);
  protected feedData$ = this.store.selectSignal(feedSelector);
  protected feedError$ = this.store.selectSignal(errorSelector);

  protected mockedArticles: IFeedResponse = {
    articlesCount: 10,
    articles: [
      {
        author: {
          username: 'John Doe',
          bio: 'Software Engineer',
          image: 'https://example.com/image.jpg',
          following: false,
        },
        body: 'This is a sample article body.',
        createdAt: '2023-10-01T12:00:00Z',
        description: 'This is a sample article description.',
        favorited: false,
        favoritesCount: 0,
        slug: 'sample-article',
        tagList: ['sample', 'article'],
        title: 'Sample Article Title',
        updatedAt: '2023-10-01T12:00:00Z',
      },
      {
        author: {
          username: 'Joseph Smith',
          bio: 'Software Engineer',
          image: 'https://example.com/image.jpg',
          following: true,
        },
        body: 'This is a sample article body - 2',
        createdAt: '2023-10-01T12:00:00Z',
        description: 'This is a sample article description - 2',
        favorited: true,
        favoritesCount: 0,
        slug: 'sample-article',
        tagList: ['sample', 'article'],
        title: 'Sample Article Title - 2',
        updatedAt: '2023-10-01T12:00:00Z',
      },
    ],
  };

  constructor() {
    effect(
      () => {
        this.fetchData();
      },
      { allowSignalWrites: true }
    );
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrl() }));
  }
}
