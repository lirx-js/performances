import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4460269476971953',
  standalone: true,
  templateUrl: './app-4460269476971953.component.html',
  styleUrl: './app-4460269476971953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4460269476971953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
