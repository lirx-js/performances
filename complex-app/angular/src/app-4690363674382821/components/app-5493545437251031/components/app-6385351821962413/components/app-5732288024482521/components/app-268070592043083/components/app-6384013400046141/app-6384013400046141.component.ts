import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6384013400046141',
  standalone: true,
  templateUrl: './app-6384013400046141.component.html',
  styleUrl: './app-6384013400046141.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6384013400046141Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
