import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6201631236779027',
  standalone: true,
  templateUrl: './app-6201631236779027.component.html',
  styleUrl: './app-6201631236779027.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6201631236779027Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
