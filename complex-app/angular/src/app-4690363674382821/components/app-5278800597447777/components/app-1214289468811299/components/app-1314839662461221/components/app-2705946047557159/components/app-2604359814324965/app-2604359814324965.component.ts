import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2604359814324965',
  standalone: true,
  templateUrl: './app-2604359814324965.component.html',
  styleUrl: './app-2604359814324965.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2604359814324965Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
