import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1700884055025883',
  standalone: true,
  templateUrl: './app-1700884055025883.component.html',
  styleUrl: './app-1700884055025883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1700884055025883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
