import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5160575164596497',
  standalone: true,
  templateUrl: './app-5160575164596497.component.html',
  styleUrl: './app-5160575164596497.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5160575164596497Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
