import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7219844034020131',
  standalone: true,
  templateUrl: './app-7219844034020131.component.html',
  styleUrl: './app-7219844034020131.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7219844034020131Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
