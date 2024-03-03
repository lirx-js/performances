import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2438000937072547',
  standalone: true,
  templateUrl: './app-2438000937072547.component.html',
  styleUrl: './app-2438000937072547.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2438000937072547Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
