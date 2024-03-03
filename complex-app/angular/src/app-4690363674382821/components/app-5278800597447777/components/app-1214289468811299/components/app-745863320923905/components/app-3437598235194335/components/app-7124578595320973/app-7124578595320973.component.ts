import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7124578595320973',
  standalone: true,
  templateUrl: './app-7124578595320973.component.html',
  styleUrl: './app-7124578595320973.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7124578595320973Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
