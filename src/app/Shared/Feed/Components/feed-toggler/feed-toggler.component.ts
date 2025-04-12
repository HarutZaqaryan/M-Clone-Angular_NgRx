import { Component, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { isLoggedInSelector } from '../../Store/selectors/authSelectors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mc-feed-toggler',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './feed-toggler.component.html',
  styleUrl: './feed-toggler.component.scss',
})
export class FeedTogglerComponent {
  public tagName = input('', { alias: 'tagNameProps' });

  private store = inject(Store);

  protected isLoggedIn$ = this.store.selectSignal(isLoggedInSelector);

}
