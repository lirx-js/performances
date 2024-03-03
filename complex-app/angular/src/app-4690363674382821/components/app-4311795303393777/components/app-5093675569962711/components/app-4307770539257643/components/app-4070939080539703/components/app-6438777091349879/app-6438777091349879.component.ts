import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6438777091349879',
  standalone: true,
  templateUrl: './app-6438777091349879.component.html',
  styleUrl: './app-6438777091349879.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6438777091349879Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
