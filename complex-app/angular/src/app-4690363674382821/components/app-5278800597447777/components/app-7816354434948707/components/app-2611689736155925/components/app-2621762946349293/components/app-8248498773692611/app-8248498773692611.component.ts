import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8248498773692611',
  standalone: true,
  templateUrl: './app-8248498773692611.component.html',
  styleUrl: './app-8248498773692611.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8248498773692611Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
