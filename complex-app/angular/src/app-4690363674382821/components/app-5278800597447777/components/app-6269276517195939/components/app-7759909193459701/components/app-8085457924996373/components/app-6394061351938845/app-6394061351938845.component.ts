import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6394061351938845',
  standalone: true,
  templateUrl: './app-6394061351938845.component.html',
  styleUrl: './app-6394061351938845.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6394061351938845Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
