import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7266662753871633',
  standalone: true,
  templateUrl: './app-7266662753871633.component.html',
  styleUrl: './app-7266662753871633.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7266662753871633Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
