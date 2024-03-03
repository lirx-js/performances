import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2172191515318171',
  standalone: true,
  templateUrl: './app-2172191515318171.component.html',
  styleUrl: './app-2172191515318171.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2172191515318171Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
