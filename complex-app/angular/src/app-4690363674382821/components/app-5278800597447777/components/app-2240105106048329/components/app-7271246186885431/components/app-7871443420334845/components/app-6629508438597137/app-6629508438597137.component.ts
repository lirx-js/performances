import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6629508438597137',
  standalone: true,
  templateUrl: './app-6629508438597137.component.html',
  styleUrl: './app-6629508438597137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6629508438597137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
