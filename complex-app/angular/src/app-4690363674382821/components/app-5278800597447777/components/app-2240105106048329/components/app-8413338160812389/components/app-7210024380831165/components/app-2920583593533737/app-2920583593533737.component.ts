import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2920583593533737',
  standalone: true,
  templateUrl: './app-2920583593533737.component.html',
  styleUrl: './app-2920583593533737.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2920583593533737Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
