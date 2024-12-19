import {
  Component,
  computed,
  effect,
  Input,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { IBackEndErrors } from '../../Models/IBackEndErrors';
import { FirstLetterUpPipe } from '../../Pipes/first-letter-up.pipe';

@Component({
  selector: 'mc-backend-error-messages',
  standalone: true,
  imports: [FirstLetterUpPipe],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss',
})
export class BackendErrorMessagesComponent {
  // public backendErrorsProps = input<IBackEndErrors>(null);
  public backendErrors = input<IBackEndErrors | null>(null, {
    alias: 'backendErrorsProps',
  });

  errorMessages = computed(() => {
    const backendErrors = this.backendErrors();
    if (!backendErrors) return [];
    return Object.keys(backendErrors).map((name: string) => {
      const messages = backendErrors[name].join(' ');
      return `${name}: ${messages}`;
    });
  });
}
