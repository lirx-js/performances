import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8913679751071371',
  standalone: true,
  templateUrl: './app-8913679751071371.component.html',
  styleUrl: './app-8913679751071371.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8913679751071371Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
