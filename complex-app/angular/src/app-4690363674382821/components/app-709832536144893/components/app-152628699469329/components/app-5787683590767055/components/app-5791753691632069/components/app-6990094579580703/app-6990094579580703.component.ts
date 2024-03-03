import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6990094579580703',
  standalone: true,
  templateUrl: './app-6990094579580703.component.html',
  styleUrl: './app-6990094579580703.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6990094579580703Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
