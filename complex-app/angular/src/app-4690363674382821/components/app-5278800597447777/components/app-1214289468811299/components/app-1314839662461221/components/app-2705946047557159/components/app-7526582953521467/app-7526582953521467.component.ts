import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7526582953521467',
  standalone: true,
  templateUrl: './app-7526582953521467.component.html',
  styleUrl: './app-7526582953521467.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7526582953521467Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
