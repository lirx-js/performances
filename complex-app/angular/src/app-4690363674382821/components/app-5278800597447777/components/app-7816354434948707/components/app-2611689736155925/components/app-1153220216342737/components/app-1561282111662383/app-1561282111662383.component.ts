import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1561282111662383',
  standalone: true,
  templateUrl: './app-1561282111662383.component.html',
  styleUrl: './app-1561282111662383.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1561282111662383Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
