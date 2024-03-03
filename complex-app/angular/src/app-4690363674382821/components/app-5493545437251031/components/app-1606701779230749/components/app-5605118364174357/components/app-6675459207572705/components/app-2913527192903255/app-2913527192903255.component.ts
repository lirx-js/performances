import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2913527192903255',
  standalone: true,
  templateUrl: './app-2913527192903255.component.html',
  styleUrl: './app-2913527192903255.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2913527192903255Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
