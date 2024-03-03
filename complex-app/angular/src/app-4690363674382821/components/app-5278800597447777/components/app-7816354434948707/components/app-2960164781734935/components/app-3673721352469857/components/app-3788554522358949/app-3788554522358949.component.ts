import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3788554522358949',
  standalone: true,
  templateUrl: './app-3788554522358949.component.html',
  styleUrl: './app-3788554522358949.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3788554522358949Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
