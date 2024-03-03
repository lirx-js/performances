import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4263510179152115',
  standalone: true,
  templateUrl: './app-4263510179152115.component.html',
  styleUrl: './app-4263510179152115.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4263510179152115Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
