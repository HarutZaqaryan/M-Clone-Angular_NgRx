import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ArticleFormComponent } from '../../../Shared/Feed/Components/article-form/article-form.component';
import { IArticleInput } from '../../../Shared/Feed/Models/IArticleInput';
import { Store } from '@ngrx/store';
import { isSubmittingSelector } from '../../../Shared/Feed/Store/selectors/createArticleSelectors';
import { validationErrorsSelector } from '../../../Shared/Feed/Store/selectors/createArticleSelectors';
import { createArticleAction } from '../../../Shared/Feed/Store/actions/createArticle.actions';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  imports: [CommonModule, ArticleFormComponent],
  standalone: true,
})
export class CreateArticleComponent implements OnInit {
  private store = inject(Store);

  public initialValues: IArticleInput | null = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  public isSubmitting$ = this.store.selectSignal(isSubmittingSelector);
  public backendErrors$ = this.store.selectSignal(validationErrorsSelector);

  constructor() {}

  ngOnInit() {}

  onSubmit(articleInput: Partial<IArticleInput>): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
