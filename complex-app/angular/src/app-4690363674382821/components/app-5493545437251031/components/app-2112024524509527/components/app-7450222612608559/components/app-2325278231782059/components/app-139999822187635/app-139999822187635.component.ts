import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-139999822187635',
  standalone: true,
  templateUrl: './app-139999822187635.component.html',
  styleUrl: './app-139999822187635.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App139999822187635Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
