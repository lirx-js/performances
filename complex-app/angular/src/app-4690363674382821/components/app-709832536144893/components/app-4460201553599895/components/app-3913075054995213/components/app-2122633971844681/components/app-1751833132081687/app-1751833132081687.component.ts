import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1751833132081687',
  standalone: true,
  templateUrl: './app-1751833132081687.component.html',
  styleUrl: './app-1751833132081687.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1751833132081687Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
