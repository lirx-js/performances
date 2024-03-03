import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3618406179511347',
  standalone: true,
  templateUrl: './app-3618406179511347.component.html',
  styleUrl: './app-3618406179511347.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3618406179511347Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
