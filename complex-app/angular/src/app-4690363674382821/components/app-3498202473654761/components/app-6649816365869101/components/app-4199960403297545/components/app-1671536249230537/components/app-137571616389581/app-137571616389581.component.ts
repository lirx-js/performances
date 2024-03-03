import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-137571616389581',
  standalone: true,
  templateUrl: './app-137571616389581.component.html',
  styleUrl: './app-137571616389581.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App137571616389581Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
