import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1248110583851675',
  standalone: true,
  templateUrl: './app-1248110583851675.component.html',
  styleUrl: './app-1248110583851675.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1248110583851675Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
