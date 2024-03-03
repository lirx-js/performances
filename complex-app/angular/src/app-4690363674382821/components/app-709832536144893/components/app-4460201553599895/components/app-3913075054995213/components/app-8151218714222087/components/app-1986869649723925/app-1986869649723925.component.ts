import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1986869649723925',
  standalone: true,
  templateUrl: './app-1986869649723925.component.html',
  styleUrl: './app-1986869649723925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1986869649723925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
