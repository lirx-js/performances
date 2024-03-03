import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8683830645584687',
  standalone: true,
  templateUrl: './app-8683830645584687.component.html',
  styleUrl: './app-8683830645584687.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8683830645584687Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
