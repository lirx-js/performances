import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6408194985561053',
  standalone: true,
  templateUrl: './app-6408194985561053.component.html',
  styleUrl: './app-6408194985561053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6408194985561053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
