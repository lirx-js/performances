import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2840095644864567',
  standalone: true,
  templateUrl: './app-2840095644864567.component.html',
  styleUrl: './app-2840095644864567.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2840095644864567Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
