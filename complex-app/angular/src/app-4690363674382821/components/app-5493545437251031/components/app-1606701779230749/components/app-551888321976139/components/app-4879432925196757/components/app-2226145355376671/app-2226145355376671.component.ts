import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2226145355376671',
  standalone: true,
  templateUrl: './app-2226145355376671.component.html',
  styleUrl: './app-2226145355376671.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2226145355376671Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
