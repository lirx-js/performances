import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1756325525301571',
  standalone: true,
  templateUrl: './app-1756325525301571.component.html',
  styleUrl: './app-1756325525301571.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1756325525301571Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
