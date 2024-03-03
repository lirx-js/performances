import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8962174659612957',
  standalone: true,
  templateUrl: './app-8962174659612957.component.html',
  styleUrl: './app-8962174659612957.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8962174659612957Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
