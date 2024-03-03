import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6513314749716799',
  standalone: true,
  templateUrl: './app-6513314749716799.component.html',
  styleUrl: './app-6513314749716799.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6513314749716799Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
