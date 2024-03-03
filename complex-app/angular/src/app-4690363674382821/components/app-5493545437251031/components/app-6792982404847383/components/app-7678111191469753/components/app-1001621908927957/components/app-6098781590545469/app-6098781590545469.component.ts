import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6098781590545469',
  standalone: true,
  templateUrl: './app-6098781590545469.component.html',
  styleUrl: './app-6098781590545469.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6098781590545469Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
