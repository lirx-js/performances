import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2512416945708919',
  standalone: true,
  templateUrl: './app-2512416945708919.component.html',
  styleUrl: './app-2512416945708919.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2512416945708919Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
