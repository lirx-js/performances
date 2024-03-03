import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8431767510359385',
  standalone: true,
  templateUrl: './app-8431767510359385.component.html',
  styleUrl: './app-8431767510359385.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8431767510359385Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
