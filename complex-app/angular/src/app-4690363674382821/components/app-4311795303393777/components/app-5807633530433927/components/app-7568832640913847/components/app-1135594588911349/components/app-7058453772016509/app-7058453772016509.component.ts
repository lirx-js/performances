import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7058453772016509',
  standalone: true,
  templateUrl: './app-7058453772016509.component.html',
  styleUrl: './app-7058453772016509.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7058453772016509Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
