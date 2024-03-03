import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2157855511223951',
  standalone: true,
  templateUrl: './app-2157855511223951.component.html',
  styleUrl: './app-2157855511223951.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2157855511223951Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
