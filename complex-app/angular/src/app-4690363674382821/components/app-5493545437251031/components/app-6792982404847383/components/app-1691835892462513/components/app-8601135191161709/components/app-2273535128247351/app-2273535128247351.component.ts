import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2273535128247351',
  standalone: true,
  templateUrl: './app-2273535128247351.component.html',
  styleUrl: './app-2273535128247351.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2273535128247351Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
