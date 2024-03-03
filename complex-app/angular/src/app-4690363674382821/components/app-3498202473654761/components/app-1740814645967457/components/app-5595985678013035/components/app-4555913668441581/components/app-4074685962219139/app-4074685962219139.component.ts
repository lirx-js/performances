import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4074685962219139',
  standalone: true,
  templateUrl: './app-4074685962219139.component.html',
  styleUrl: './app-4074685962219139.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4074685962219139Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
