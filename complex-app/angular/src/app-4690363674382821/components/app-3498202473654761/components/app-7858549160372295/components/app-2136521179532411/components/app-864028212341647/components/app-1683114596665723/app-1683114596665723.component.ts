import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1683114596665723',
  standalone: true,
  templateUrl: './app-1683114596665723.component.html',
  styleUrl: './app-1683114596665723.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1683114596665723Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
