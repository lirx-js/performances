import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3733428637564769',
  standalone: true,
  templateUrl: './app-3733428637564769.component.html',
  styleUrl: './app-3733428637564769.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3733428637564769Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
