import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6024213078790799',
  standalone: true,
  templateUrl: './app-6024213078790799.component.html',
  styleUrl: './app-6024213078790799.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6024213078790799Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
