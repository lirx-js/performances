import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1505208075491001',
  standalone: true,
  templateUrl: './app-1505208075491001.component.html',
  styleUrl: './app-1505208075491001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1505208075491001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
