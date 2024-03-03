import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5884758411114533',
  standalone: true,
  templateUrl: './app-5884758411114533.component.html',
  styleUrl: './app-5884758411114533.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5884758411114533Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
