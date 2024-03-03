import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6745190680824337',
  standalone: true,
  templateUrl: './app-6745190680824337.component.html',
  styleUrl: './app-6745190680824337.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6745190680824337Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
