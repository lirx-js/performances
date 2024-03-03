import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6392389281384135',
  standalone: true,
  templateUrl: './app-6392389281384135.component.html',
  styleUrl: './app-6392389281384135.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6392389281384135Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
