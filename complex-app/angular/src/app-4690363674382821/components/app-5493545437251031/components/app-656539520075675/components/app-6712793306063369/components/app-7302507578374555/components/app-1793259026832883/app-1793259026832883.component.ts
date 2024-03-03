import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1793259026832883',
  standalone: true,
  templateUrl: './app-1793259026832883.component.html',
  styleUrl: './app-1793259026832883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1793259026832883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
