import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1854682201398913',
  standalone: true,
  templateUrl: './app-1854682201398913.component.html',
  styleUrl: './app-1854682201398913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1854682201398913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
