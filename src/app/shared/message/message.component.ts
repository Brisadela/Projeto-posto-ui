import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
  <div *ngIf="hasError()" class="p-message p-message-error">
  {{ text }}
</div>
  `,
  styles: [`
  .p-message-error {
    padding: 3px;
    margin: 0;
    margin-top: 4px;
  }
  `]

})
export class MessageComponent {

  @Input() error!: string;
  @Input() control!: FormControl;
  @Input() text!: string;

  hasError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
