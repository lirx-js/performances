import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4807449085767731',
  standalone: true,
  templateUrl: './app-4807449085767731.component.html',
  styleUrl: './app-4807449085767731.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4807449085767731Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
