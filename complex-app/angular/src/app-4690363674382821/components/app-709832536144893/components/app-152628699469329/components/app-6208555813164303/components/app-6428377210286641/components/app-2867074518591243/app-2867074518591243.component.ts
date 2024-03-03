import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2867074518591243',
  standalone: true,
  templateUrl: './app-2867074518591243.component.html',
  styleUrl: './app-2867074518591243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2867074518591243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
