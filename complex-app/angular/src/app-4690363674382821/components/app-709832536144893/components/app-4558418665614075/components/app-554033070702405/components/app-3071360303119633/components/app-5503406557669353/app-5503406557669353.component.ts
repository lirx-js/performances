import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5503406557669353',
  standalone: true,
  templateUrl: './app-5503406557669353.component.html',
  styleUrl: './app-5503406557669353.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5503406557669353Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}