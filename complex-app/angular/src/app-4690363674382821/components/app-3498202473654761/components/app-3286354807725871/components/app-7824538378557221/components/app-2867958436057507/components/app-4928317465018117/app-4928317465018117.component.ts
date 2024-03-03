import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4928317465018117',
  standalone: true,
  templateUrl: './app-4928317465018117.component.html',
  styleUrl: './app-4928317465018117.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4928317465018117Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
