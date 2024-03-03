import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6462770946223167',
  standalone: true,
  templateUrl: './app-6462770946223167.component.html',
  styleUrl: './app-6462770946223167.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6462770946223167Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
