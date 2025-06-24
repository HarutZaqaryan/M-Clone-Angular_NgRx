import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import {
  deleteArticleDetailsAction,
  getArticleDetailsAction,
} from '../../../Shared/Feed/Store/actions/articleDetails.actions';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  articleDetailsSelector,
  errorSelector,
  isLoadingSelector,
} from '../../../Shared/Feed/Store/selectors/articleDetailsSelectors';
import { currentUserSelector } from '../../../Shared/Feed/Store/selectors/authSelectors';
import { LoadingComponent } from '../../../Shared/Feed/Components/loading/loading.component';
import { ErrorMessageComponent } from '../../../Shared/Feed/Components/error-message/error-message.component';
import { TagListComponent } from '../../../Shared/Feed/Components/tag-list/tag-list.component';
import { ArticleService } from '../../Services/article.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
// import { IArticle } from '../../../Articles/Models/IArticle';
// import { combineLatest, map, Observable } from 'rxjs';
// import { ICurrentUser } from './../../../Shared/Feed/Models/ICurrentUser';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoadingComponent,
    ErrorMessageComponent,
    TagListComponent,
  ],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss',
})
export class ArticleDetailsComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);
  private destroyRef = inject(DestroyRef);

  private slug = '';

  public article$: Signal<any> | null = this.store.selectSignal(
    articleDetailsSelector
  );
  public isLoading$ = this.store.selectSignal(isLoadingSelector);
  public error$ = this.store.selectSignal(errorSelector);
  public currentUser$ = this.store.selectSignal(currentUserSelector);
  // public isAuthor$: Observable<boolean>;

  public isAuthor$: Signal<boolean> = signal(false);

  ngOnInit(): void {
    this.initializeValus();
    this.fetchData();
  }

  initializeValus(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    // * This part checks if the current user is the author of the article by using rxjs features
    // this.isAuthor$ = combineLatest(
    //   this.store.pipe(select(articleDetailsSelector)),
    //   this.store.pipe(select(currentUserSelector))
    // ).pipe(
    //   map(
    //     ([articleDetails, currentUser]: [
    //       IArticle | null,
    //       ICurrentUser | null
    //     ]) => {
    //       if (!articleDetails || !currentUser) {
    //         return false;
    //       }
    //       return currentUser.username === articleDetails.author.username;
    //     }
    //   )
    // );
  }

  fetchData(): void {
    this.store.dispatch(getArticleDetailsAction({ slug: this.slug }));

    this.isAuthor$ = computed(() => {
      return (
        this.article$()?.author?.username === this.currentUser$()?.username
      );
    });
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleDetailsAction({ slug: this.slug }));
  }
}
