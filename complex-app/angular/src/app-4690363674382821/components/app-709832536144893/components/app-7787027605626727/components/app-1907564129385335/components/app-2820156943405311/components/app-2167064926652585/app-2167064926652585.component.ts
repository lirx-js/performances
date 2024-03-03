import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2167064926652585',
  standalone: true,
  templateUrl: './app-2167064926652585.component.html',
  styleUrl: './app-2167064926652585.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2167064926652585Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
