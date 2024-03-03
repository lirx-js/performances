import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4438162118223587',
  standalone: true,
  templateUrl: './app-4438162118223587.component.html',
  styleUrl: './app-4438162118223587.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4438162118223587Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
