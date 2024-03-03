import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6031199231333637',
  standalone: true,
  templateUrl: './app-6031199231333637.component.html',
  styleUrl: './app-6031199231333637.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6031199231333637Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
