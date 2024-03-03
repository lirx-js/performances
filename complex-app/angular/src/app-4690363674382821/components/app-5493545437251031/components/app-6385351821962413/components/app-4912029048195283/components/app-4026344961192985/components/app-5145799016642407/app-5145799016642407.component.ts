import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5145799016642407',
  standalone: true,
  templateUrl: './app-5145799016642407.component.html',
  styleUrl: './app-5145799016642407.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5145799016642407Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
