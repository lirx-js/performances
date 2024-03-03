import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1373562393792351',
  standalone: true,
  templateUrl: './app-1373562393792351.component.html',
  styleUrl: './app-1373562393792351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1373562393792351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
