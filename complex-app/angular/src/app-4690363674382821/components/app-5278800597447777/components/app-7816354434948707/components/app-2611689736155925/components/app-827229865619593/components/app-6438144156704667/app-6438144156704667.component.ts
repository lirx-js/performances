import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6438144156704667',
  standalone: true,
  templateUrl: './app-6438144156704667.component.html',
  styleUrl: './app-6438144156704667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6438144156704667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
