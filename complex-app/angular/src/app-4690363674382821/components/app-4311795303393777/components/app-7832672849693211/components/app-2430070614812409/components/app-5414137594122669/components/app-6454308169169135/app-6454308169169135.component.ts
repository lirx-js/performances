import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6454308169169135',
  standalone: true,
  templateUrl: './app-6454308169169135.component.html',
  styleUrl: './app-6454308169169135.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6454308169169135Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
