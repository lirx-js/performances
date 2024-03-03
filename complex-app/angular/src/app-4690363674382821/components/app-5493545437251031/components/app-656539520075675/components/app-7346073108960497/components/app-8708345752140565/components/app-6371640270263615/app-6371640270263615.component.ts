import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6371640270263615',
  standalone: true,
  templateUrl: './app-6371640270263615.component.html',
  styleUrl: './app-6371640270263615.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6371640270263615Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
