import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6056642534493161',
  standalone: true,
  templateUrl: './app-6056642534493161.component.html',
  styleUrl: './app-6056642534493161.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6056642534493161Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
