import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6106834153038235',
  standalone: true,
  templateUrl: './app-6106834153038235.component.html',
  styleUrl: './app-6106834153038235.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6106834153038235Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
