import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6537410520332561',
  standalone: true,
  templateUrl: './app-6537410520332561.component.html',
  styleUrl: './app-6537410520332561.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6537410520332561Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
