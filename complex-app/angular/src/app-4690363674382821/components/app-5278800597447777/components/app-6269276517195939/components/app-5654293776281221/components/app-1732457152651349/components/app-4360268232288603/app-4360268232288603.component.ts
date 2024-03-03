import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4360268232288603',
  standalone: true,
  templateUrl: './app-4360268232288603.component.html',
  styleUrl: './app-4360268232288603.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4360268232288603Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
