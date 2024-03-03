import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-222566414775239',
  standalone: true,
  templateUrl: './app-222566414775239.component.html',
  styleUrl: './app-222566414775239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App222566414775239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
