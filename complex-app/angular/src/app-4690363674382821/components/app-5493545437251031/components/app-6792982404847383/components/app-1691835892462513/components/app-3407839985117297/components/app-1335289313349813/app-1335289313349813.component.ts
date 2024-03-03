import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1335289313349813',
  standalone: true,
  templateUrl: './app-1335289313349813.component.html',
  styleUrl: './app-1335289313349813.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1335289313349813Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
