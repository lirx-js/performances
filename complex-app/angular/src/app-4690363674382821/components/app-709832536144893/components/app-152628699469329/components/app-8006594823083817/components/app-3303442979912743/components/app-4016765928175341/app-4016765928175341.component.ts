import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4016765928175341',
  standalone: true,
  templateUrl: './app-4016765928175341.component.html',
  styleUrl: './app-4016765928175341.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4016765928175341Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
