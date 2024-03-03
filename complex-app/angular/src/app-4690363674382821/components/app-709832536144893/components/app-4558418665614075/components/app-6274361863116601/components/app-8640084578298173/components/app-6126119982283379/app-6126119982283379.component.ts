import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6126119982283379',
  standalone: true,
  templateUrl: './app-6126119982283379.component.html',
  styleUrl: './app-6126119982283379.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6126119982283379Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
