import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1655290268622243',
  standalone: true,
  templateUrl: './app-1655290268622243.component.html',
  styleUrl: './app-1655290268622243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1655290268622243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
