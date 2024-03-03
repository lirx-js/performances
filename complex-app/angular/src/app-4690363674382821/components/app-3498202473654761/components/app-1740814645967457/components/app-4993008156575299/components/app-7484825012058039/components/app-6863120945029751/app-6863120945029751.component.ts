import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6863120945029751',
  standalone: true,
  templateUrl: './app-6863120945029751.component.html',
  styleUrl: './app-6863120945029751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6863120945029751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
