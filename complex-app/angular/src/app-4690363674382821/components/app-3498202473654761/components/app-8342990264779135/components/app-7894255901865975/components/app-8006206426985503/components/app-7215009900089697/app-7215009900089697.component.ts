import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7215009900089697',
  standalone: true,
  templateUrl: './app-7215009900089697.component.html',
  styleUrl: './app-7215009900089697.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7215009900089697Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
