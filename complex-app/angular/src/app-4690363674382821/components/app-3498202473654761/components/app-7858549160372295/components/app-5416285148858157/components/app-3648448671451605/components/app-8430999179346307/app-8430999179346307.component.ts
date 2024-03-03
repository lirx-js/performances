import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8430999179346307',
  standalone: true,
  templateUrl: './app-8430999179346307.component.html',
  styleUrl: './app-8430999179346307.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8430999179346307Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
