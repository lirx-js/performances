import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3713080012838769',
  standalone: true,
  templateUrl: './app-3713080012838769.component.html',
  styleUrl: './app-3713080012838769.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3713080012838769Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
