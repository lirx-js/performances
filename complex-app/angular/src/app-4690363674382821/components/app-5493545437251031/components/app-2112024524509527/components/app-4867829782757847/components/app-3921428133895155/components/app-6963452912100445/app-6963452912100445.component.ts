import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6963452912100445',
  standalone: true,
  templateUrl: './app-6963452912100445.component.html',
  styleUrl: './app-6963452912100445.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6963452912100445Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
