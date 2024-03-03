import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-716663451979277',
  standalone: true,
  templateUrl: './app-716663451979277.component.html',
  styleUrl: './app-716663451979277.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App716663451979277Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
