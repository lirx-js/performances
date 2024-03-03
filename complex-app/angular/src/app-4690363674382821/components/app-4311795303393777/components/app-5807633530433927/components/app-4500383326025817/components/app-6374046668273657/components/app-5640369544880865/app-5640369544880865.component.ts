import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5640369544880865',
  standalone: true,
  templateUrl: './app-5640369544880865.component.html',
  styleUrl: './app-5640369544880865.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5640369544880865Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
