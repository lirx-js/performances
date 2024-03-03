import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1284697116880959',
  standalone: true,
  templateUrl: './app-1284697116880959.component.html',
  styleUrl: './app-1284697116880959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1284697116880959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
