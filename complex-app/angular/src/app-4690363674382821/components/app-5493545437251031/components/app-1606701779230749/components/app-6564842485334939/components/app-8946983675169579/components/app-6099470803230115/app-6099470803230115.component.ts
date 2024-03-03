import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6099470803230115',
  standalone: true,
  templateUrl: './app-6099470803230115.component.html',
  styleUrl: './app-6099470803230115.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6099470803230115Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
