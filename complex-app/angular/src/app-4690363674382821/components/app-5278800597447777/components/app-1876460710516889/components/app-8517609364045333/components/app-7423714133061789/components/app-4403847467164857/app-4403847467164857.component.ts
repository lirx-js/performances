import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4403847467164857',
  standalone: true,
  templateUrl: './app-4403847467164857.component.html',
  styleUrl: './app-4403847467164857.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4403847467164857Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
