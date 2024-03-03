import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5147531002144379',
  standalone: true,
  templateUrl: './app-5147531002144379.component.html',
  styleUrl: './app-5147531002144379.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5147531002144379Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
