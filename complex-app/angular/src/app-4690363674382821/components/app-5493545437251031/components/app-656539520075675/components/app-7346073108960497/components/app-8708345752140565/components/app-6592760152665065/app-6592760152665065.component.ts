import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6592760152665065',
  standalone: true,
  templateUrl: './app-6592760152665065.component.html',
  styleUrl: './app-6592760152665065.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6592760152665065Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
