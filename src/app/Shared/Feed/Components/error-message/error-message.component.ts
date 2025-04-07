import { Component, input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  standalone: true,
  imports: [],
  template: `{{ messageProps() }}`,
})
export class ErrorMessageComponent {
  public messageProps = input<string>('Something went wrong', {
    alias: 'message',
  });
}
