import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2102255779332653',
  standalone: true,
  templateUrl: './app-2102255779332653.component.html',
  styleUrl: './app-2102255779332653.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2102255779332653Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
