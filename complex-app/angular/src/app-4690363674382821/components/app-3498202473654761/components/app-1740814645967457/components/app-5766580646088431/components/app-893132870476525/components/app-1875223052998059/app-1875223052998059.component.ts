import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1875223052998059',
  standalone: true,
  templateUrl: './app-1875223052998059.component.html',
  styleUrl: './app-1875223052998059.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1875223052998059Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
