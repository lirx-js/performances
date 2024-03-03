import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8598366698923827',
  standalone: true,
  templateUrl: './app-8598366698923827.component.html',
  styleUrl: './app-8598366698923827.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8598366698923827Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
