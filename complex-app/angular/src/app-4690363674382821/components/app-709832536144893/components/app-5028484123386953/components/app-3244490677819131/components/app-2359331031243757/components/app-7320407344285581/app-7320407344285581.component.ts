import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7320407344285581',
  standalone: true,
  templateUrl: './app-7320407344285581.component.html',
  styleUrl: './app-7320407344285581.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7320407344285581Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
