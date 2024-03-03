import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5530855487370279',
  standalone: true,
  templateUrl: './app-5530855487370279.component.html',
  styleUrl: './app-5530855487370279.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5530855487370279Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
