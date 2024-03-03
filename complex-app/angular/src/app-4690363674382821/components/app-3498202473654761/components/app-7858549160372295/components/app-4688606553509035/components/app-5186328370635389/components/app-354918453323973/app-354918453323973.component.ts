import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-354918453323973',
  standalone: true,
  templateUrl: './app-354918453323973.component.html',
  styleUrl: './app-354918453323973.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App354918453323973Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
