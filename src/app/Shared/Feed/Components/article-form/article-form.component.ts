import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';
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
export class ArticleFormComponent {
  public initialValues = input<IArticleInput | null>(null, {
    alias: 'initialValuesProps',
  });
  public isSubmiting = input<boolean>(false, { alias: 'isSubmitingProps' });
  public errors = input<IBackEndErrors | null>(null, {
    alias: 'errorsProps',
  });

  public articleSubmitEvent = output<IArticleInput>();

  private fb: FormBuilder = inject(FormBuilder);

  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      body: [''],
      tagList: [[]],
    });
    effect(() => {
      const values = this.initialValues();
      if (values) {
        this.form?.patchValue({
          title: values.title,
          description: values.description,
          body: values.body,
          tagList: values.tagList.map((tag) => `#${tag}`).join(', '),
        });
      }
    });
  }

  public onSubmit(): void {
    const trimedTaglist = this.deepTrim(this.form.value.tagList);

    const preparedFormValeue: IArticleInput = {
      ...this.form.value,
      tagList: trimedTaglist.length ? trimedTaglist.split(',') : [],
    };
    this.articleSubmitEvent.emit(preparedFormValeue);
    this.form.reset();
  }

  private deepTrim(str: string): string {
    return str.replace(/\s+/g, '');
  }
}
