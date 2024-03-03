import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7308753877026535',
  standalone: true,
  templateUrl: './app-7308753877026535.component.html',
  styleUrl: './app-7308753877026535.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7308753877026535Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
