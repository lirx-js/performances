import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6935054881928031',
  standalone: true,
  templateUrl: './app-6935054881928031.component.html',
  styleUrl: './app-6935054881928031.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6935054881928031Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
