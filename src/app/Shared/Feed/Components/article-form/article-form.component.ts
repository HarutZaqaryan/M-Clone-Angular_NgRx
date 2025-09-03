import { Component, inject, input, OnInit, output } from '@angular/core';
import { IArticleInput } from '../../Models/IArticleInput';
import { IBackEndErrors } from '../../Models/IBackEndErrors';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesComponent } from '../backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  imports: [ReactiveFormsModule, BackendErrorMessagesComponent],
  standalone: true,
})
export class ArticleFormComponent implements OnInit {
  public initialValues = input<IArticleInput | null>(null, {
    alias: 'initialValuesProps',
  });
  public isSubmitting = input<boolean>(false, { alias: 'isSubmittingProps' });
  public errors = input<IBackEndErrors | null>(null, {
    alias: 'errorsProps',
  });

  public articleSubmitEvent = output<IArticleInput>();

  private fb: FormBuilder = inject(FormBuilder);

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: [this.initialValues()?.title || '', []],
      description: [this.initialValues()?.description || '', []],
      body: [this.initialValues()?.body || '', []],
      tagList: [this.initialValues()?.tagList.join(' ') || [], []],
    });
  }

  public onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
    this.form.reset();
  }
}
