import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6135560798066331',
  standalone: true,
  templateUrl: './app-6135560798066331.component.html',
  styleUrl: './app-6135560798066331.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6135560798066331Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
