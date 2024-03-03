import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1531163752973711',
  standalone: true,
  templateUrl: './app-1531163752973711.component.html',
  styleUrl: './app-1531163752973711.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1531163752973711Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
