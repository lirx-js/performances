import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6759968137234143',
  standalone: true,
  templateUrl: './app-6759968137234143.component.html',
  styleUrl: './app-6759968137234143.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6759968137234143Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
