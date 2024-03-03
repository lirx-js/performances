import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-498920614113127',
  standalone: true,
  templateUrl: './app-498920614113127.component.html',
  styleUrl: './app-498920614113127.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App498920614113127Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
