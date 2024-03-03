import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7918775297363371',
  standalone: true,
  templateUrl: './app-7918775297363371.component.html',
  styleUrl: './app-7918775297363371.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7918775297363371Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
