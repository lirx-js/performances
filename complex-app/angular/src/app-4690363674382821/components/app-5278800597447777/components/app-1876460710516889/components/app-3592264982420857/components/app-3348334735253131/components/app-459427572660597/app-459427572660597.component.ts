import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-459427572660597',
  standalone: true,
  templateUrl: './app-459427572660597.component.html',
  styleUrl: './app-459427572660597.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App459427572660597Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
