import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2847638769223433',
  standalone: true,
  templateUrl: './app-2847638769223433.component.html',
  styleUrl: './app-2847638769223433.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2847638769223433Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
