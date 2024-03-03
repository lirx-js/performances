import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6450026749609511',
  standalone: true,
  templateUrl: './app-6450026749609511.component.html',
  styleUrl: './app-6450026749609511.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6450026749609511Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
