import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6282496410493001',
  standalone: true,
  templateUrl: './app-6282496410493001.component.html',
  styleUrl: './app-6282496410493001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6282496410493001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
