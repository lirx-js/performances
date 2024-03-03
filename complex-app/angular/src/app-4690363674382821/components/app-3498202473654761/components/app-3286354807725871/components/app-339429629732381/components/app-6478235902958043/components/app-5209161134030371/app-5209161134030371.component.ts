import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5209161134030371',
  standalone: true,
  templateUrl: './app-5209161134030371.component.html',
  styleUrl: './app-5209161134030371.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5209161134030371Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
