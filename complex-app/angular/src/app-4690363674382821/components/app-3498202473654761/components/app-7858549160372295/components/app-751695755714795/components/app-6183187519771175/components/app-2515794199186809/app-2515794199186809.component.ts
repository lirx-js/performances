import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2515794199186809',
  standalone: true,
  templateUrl: './app-2515794199186809.component.html',
  styleUrl: './app-2515794199186809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2515794199186809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
