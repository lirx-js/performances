import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8951170473171423',
  standalone: true,
  templateUrl: './app-8951170473171423.component.html',
  styleUrl: './app-8951170473171423.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8951170473171423Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
