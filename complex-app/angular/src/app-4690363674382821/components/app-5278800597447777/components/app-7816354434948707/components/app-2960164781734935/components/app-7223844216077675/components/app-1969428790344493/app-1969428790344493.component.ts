import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1969428790344493',
  standalone: true,
  templateUrl: './app-1969428790344493.component.html',
  styleUrl: './app-1969428790344493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1969428790344493Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
