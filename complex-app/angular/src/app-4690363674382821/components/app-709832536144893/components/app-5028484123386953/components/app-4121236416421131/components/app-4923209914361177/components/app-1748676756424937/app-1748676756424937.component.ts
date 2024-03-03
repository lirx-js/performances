import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1748676756424937',
  standalone: true,
  templateUrl: './app-1748676756424937.component.html',
  styleUrl: './app-1748676756424937.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1748676756424937Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
