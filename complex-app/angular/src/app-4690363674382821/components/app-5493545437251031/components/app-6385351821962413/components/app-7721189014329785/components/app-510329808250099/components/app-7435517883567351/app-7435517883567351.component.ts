import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7435517883567351',
  standalone: true,
  templateUrl: './app-7435517883567351.component.html',
  styleUrl: './app-7435517883567351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7435517883567351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
