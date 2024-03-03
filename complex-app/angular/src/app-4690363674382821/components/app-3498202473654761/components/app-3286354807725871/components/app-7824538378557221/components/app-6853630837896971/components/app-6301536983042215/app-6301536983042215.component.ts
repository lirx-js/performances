import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6301536983042215',
  standalone: true,
  templateUrl: './app-6301536983042215.component.html',
  styleUrl: './app-6301536983042215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6301536983042215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
