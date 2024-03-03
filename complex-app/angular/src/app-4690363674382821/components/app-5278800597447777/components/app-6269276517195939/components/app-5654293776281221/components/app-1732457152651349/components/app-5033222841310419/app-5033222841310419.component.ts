import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5033222841310419',
  standalone: true,
  templateUrl: './app-5033222841310419.component.html',
  styleUrl: './app-5033222841310419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5033222841310419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
