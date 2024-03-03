import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8982767550943545',
  standalone: true,
  templateUrl: './app-8982767550943545.component.html',
  styleUrl: './app-8982767550943545.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8982767550943545Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
