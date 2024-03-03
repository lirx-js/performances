import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6717379189185489',
  standalone: true,
  templateUrl: './app-6717379189185489.component.html',
  styleUrl: './app-6717379189185489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6717379189185489Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
