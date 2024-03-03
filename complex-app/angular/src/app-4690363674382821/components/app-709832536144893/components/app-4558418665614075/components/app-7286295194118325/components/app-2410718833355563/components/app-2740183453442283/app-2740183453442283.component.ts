import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2740183453442283',
  standalone: true,
  templateUrl: './app-2740183453442283.component.html',
  styleUrl: './app-2740183453442283.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2740183453442283Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
