import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-781375162665493',
  standalone: true,
  templateUrl: './app-781375162665493.component.html',
  styleUrl: './app-781375162665493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App781375162665493Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
