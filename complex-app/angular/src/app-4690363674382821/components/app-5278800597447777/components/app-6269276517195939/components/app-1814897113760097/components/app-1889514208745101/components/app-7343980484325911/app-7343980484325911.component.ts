import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7343980484325911',
  standalone: true,
  templateUrl: './app-7343980484325911.component.html',
  styleUrl: './app-7343980484325911.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7343980484325911Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
