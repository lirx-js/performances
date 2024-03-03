import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6214654849329881',
  standalone: true,
  templateUrl: './app-6214654849329881.component.html',
  styleUrl: './app-6214654849329881.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6214654849329881Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
