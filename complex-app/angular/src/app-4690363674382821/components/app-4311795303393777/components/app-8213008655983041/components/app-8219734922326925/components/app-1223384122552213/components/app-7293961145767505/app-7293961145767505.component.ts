import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7293961145767505',
  standalone: true,
  templateUrl: './app-7293961145767505.component.html',
  styleUrl: './app-7293961145767505.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7293961145767505Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
