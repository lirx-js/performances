import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6367048106835799',
  standalone: true,
  templateUrl: './app-6367048106835799.component.html',
  styleUrl: './app-6367048106835799.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6367048106835799Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
