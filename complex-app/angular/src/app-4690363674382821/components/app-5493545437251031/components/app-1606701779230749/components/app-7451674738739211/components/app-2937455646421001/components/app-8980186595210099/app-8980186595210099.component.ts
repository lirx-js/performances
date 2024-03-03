import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8980186595210099',
  standalone: true,
  templateUrl: './app-8980186595210099.component.html',
  styleUrl: './app-8980186595210099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8980186595210099Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
