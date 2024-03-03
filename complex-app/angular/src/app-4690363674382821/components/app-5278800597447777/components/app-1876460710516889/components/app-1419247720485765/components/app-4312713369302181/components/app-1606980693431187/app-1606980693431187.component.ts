import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1606980693431187',
  standalone: true,
  templateUrl: './app-1606980693431187.component.html',
  styleUrl: './app-1606980693431187.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1606980693431187Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
