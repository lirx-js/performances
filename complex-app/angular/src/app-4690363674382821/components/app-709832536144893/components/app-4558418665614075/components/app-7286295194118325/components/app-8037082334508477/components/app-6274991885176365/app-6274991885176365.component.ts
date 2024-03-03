import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6274991885176365',
  standalone: true,
  templateUrl: './app-6274991885176365.component.html',
  styleUrl: './app-6274991885176365.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6274991885176365Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
