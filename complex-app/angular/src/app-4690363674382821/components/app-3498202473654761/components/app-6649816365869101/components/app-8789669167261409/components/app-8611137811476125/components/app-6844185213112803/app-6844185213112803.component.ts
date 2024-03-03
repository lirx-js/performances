import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6844185213112803',
  standalone: true,
  templateUrl: './app-6844185213112803.component.html',
  styleUrl: './app-6844185213112803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6844185213112803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
