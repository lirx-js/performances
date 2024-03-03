import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8025304403267301',
  standalone: true,
  templateUrl: './app-8025304403267301.component.html',
  styleUrl: './app-8025304403267301.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8025304403267301Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
