import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2050259297526797',
  standalone: true,
  templateUrl: './app-2050259297526797.component.html',
  styleUrl: './app-2050259297526797.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2050259297526797Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
