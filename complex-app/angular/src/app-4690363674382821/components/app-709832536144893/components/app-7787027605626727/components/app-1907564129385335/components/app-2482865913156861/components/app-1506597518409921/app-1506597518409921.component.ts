import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1506597518409921',
  standalone: true,
  templateUrl: './app-1506597518409921.component.html',
  styleUrl: './app-1506597518409921.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1506597518409921Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
