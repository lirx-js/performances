import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2352297384913269',
  standalone: true,
  templateUrl: './app-2352297384913269.component.html',
  styleUrl: './app-2352297384913269.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2352297384913269Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
