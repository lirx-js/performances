import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7380699718650675',
  standalone: true,
  templateUrl: './app-7380699718650675.component.html',
  styleUrl: './app-7380699718650675.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7380699718650675Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
