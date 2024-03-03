import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-555721488405197',
  standalone: true,
  templateUrl: './app-555721488405197.component.html',
  styleUrl: './app-555721488405197.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App555721488405197Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
