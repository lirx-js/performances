import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3446200391179167',
  standalone: true,
  templateUrl: './app-3446200391179167.component.html',
  styleUrl: './app-3446200391179167.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3446200391179167Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
