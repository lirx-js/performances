import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7641607119996685',
  standalone: true,
  templateUrl: './app-7641607119996685.component.html',
  styleUrl: './app-7641607119996685.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7641607119996685Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
