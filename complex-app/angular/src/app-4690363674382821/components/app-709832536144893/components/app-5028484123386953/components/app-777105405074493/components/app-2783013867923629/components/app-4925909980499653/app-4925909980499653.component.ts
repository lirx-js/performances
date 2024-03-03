import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4925909980499653',
  standalone: true,
  templateUrl: './app-4925909980499653.component.html',
  styleUrl: './app-4925909980499653.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4925909980499653Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
