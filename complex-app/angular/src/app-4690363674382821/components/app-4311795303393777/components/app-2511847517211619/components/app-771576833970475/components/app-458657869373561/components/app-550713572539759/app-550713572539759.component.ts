import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-550713572539759',
  standalone: true,
  templateUrl: './app-550713572539759.component.html',
  styleUrl: './app-550713572539759.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App550713572539759Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
