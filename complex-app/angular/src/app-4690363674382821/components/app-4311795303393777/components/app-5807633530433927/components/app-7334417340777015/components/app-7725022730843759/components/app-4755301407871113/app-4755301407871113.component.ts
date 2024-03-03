import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4755301407871113',
  standalone: true,
  templateUrl: './app-4755301407871113.component.html',
  styleUrl: './app-4755301407871113.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4755301407871113Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
