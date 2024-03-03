import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6195916950495909',
  standalone: true,
  templateUrl: './app-6195916950495909.component.html',
  styleUrl: './app-6195916950495909.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6195916950495909Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
