import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7940579815739591',
  standalone: true,
  templateUrl: './app-7940579815739591.component.html',
  styleUrl: './app-7940579815739591.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7940579815739591Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
