import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3471010484474829',
  standalone: true,
  templateUrl: './app-3471010484474829.component.html',
  styleUrl: './app-3471010484474829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3471010484474829Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
