import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4261304765368915',
  standalone: true,
  templateUrl: './app-4261304765368915.component.html',
  styleUrl: './app-4261304765368915.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4261304765368915Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
