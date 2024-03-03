import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7410113679379879',
  standalone: true,
  templateUrl: './app-7410113679379879.component.html',
  styleUrl: './app-7410113679379879.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7410113679379879Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
