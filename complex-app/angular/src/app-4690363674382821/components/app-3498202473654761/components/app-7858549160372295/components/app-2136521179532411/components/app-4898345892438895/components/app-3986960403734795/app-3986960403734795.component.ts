import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3986960403734795',
  standalone: true,
  templateUrl: './app-3986960403734795.component.html',
  styleUrl: './app-3986960403734795.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3986960403734795Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
