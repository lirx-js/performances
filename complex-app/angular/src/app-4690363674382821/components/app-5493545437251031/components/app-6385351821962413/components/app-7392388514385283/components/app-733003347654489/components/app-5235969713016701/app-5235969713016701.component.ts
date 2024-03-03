import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5235969713016701',
  standalone: true,
  templateUrl: './app-5235969713016701.component.html',
  styleUrl: './app-5235969713016701.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5235969713016701Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
