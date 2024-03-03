import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7565805896165531',
  standalone: true,
  templateUrl: './app-7565805896165531.component.html',
  styleUrl: './app-7565805896165531.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7565805896165531Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
