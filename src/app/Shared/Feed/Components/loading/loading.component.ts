import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'mc-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  public isLoading = input<boolean>(false, { alias: 'isLoadingProps' });
}
