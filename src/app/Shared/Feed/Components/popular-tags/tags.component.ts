import { Component, effect, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  errorSelector,
  isLoadingSelector,
} from '../../Store/selectors/tagsSelector';
import { tagsSelector } from '../../Store/selectors/tagsSelector';
import { getTagsAction } from '../../Store/actions/getTags.actions';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mc-tags',
  standalone: true,
  imports: [RouterModule, LoadingComponent, ErrorMessageComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  public readonly apiUrl = input.required<string>({
    alias: 'apiUrlProps',
  });

  private readonly store = inject(Store);

  protected isLoading$ = this.store.selectSignal(isLoadingSelector);
  protected tags$ = this.store.selectSignal(tagsSelector);
  protected error$ = this.store.selectSignal(errorSelector);

  constructor() {
    effect(
      () => {
        this.fetchData();
      },
      { allowSignalWrites: true }
    );
  }

  fetchData(): void {
    this.store.dispatch(getTagsAction({ url: this.apiUrl() }));
  }
}
