import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4311989758630143',
  standalone: true,
  templateUrl: './app-4311989758630143.component.html',
  styleUrl: './app-4311989758630143.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4311989758630143Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
