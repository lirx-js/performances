import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7235248936393101',
  standalone: true,
  templateUrl: './app-7235248936393101.component.html',
  styleUrl: './app-7235248936393101.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7235248936393101Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
