import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ArticleFormComponent } from '../../../Shared/Feed/Components/article-form/article-form.component';
import { IArticleInput } from '../../../Shared/Feed/Models/IArticleInput';
import { Store } from '@ngrx/store';
import {
  isSubmitingSelector,
  validationErrorsSelector,
} from '../../../Shared/Feed/Store/selectors/createArticleSelectors';
import {
  articleSelector,
  isLoadingSelector,
} from '../../../Shared/Feed/Store/selectors/editArticleSelectors';
import { editArticleAction } from '../../../Shared/Feed/Store/actions/editArticle.actions';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '../../../Shared/Feed/Store/actions/getArticle.actions';
import { LoadingComponent } from '../../../Shared/Feed/Components/loading/loading.component';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
  standalone: true,
  imports: [ArticleFormComponent, LoadingComponent],
})
export class EditArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);

  private store = inject(Store);

  public isSubmiting$ = this.store.selectSignal(isSubmitingSelector);
  public isLoading$ = this.store.selectSignal(isLoadingSelector);
  public article$ = this.store.selectSignal(articleSelector);
  public backendErrors$ = this.store.selectSignal(validationErrorsSelector);

  public slug: string = '';

  public initialValues: IArticleInput | null;

  constructor() {
    effect(() => {
      // No need to reassign isLoading here since it's already set in the property initializer
      this.initialValues = {
        title: this.article$()?.title || '',
        description: this.article$()?.description || '',
        body: this.article$()?.body || '',
        tagList: this.article$()?.tagList || [],
      };
    });
  }

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(slug: string, articleInput: Partial<IArticleInput>): void {
    this.store.dispatch(editArticleAction({ slug, articleInput }));
  }
}
