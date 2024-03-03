import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6028528993577875',
  standalone: true,
  templateUrl: './app-6028528993577875.component.html',
  styleUrl: './app-6028528993577875.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6028528993577875Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
