import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6488256876561437',
  standalone: true,
  templateUrl: './app-6488256876561437.component.html',
  styleUrl: './app-6488256876561437.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6488256876561437Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
