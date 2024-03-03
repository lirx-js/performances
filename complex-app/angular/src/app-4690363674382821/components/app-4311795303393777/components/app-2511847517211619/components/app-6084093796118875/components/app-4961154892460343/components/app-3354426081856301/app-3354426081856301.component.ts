import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3354426081856301',
  standalone: true,
  templateUrl: './app-3354426081856301.component.html',
  styleUrl: './app-3354426081856301.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3354426081856301Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
