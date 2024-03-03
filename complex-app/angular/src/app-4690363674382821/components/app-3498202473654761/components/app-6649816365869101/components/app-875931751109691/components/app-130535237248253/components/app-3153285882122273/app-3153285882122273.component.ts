import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3153285882122273',
  standalone: true,
  templateUrl: './app-3153285882122273.component.html',
  styleUrl: './app-3153285882122273.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3153285882122273Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
