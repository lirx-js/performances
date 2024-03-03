import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6967611877648505',
  standalone: true,
  templateUrl: './app-6967611877648505.component.html',
  styleUrl: './app-6967611877648505.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6967611877648505Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
