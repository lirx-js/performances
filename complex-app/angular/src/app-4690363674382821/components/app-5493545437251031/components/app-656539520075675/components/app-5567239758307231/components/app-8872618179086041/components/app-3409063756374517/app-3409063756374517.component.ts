import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3409063756374517',
  standalone: true,
  templateUrl: './app-3409063756374517.component.html',
  styleUrl: './app-3409063756374517.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3409063756374517Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
