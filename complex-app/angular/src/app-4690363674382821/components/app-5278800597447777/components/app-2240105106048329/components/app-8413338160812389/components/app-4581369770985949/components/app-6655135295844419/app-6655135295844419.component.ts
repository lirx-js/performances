import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6655135295844419',
  standalone: true,
  templateUrl: './app-6655135295844419.component.html',
  styleUrl: './app-6655135295844419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6655135295844419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
