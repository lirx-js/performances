import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5062723494322903',
  standalone: true,
  templateUrl: './app-5062723494322903.component.html',
  styleUrl: './app-5062723494322903.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5062723494322903Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
