import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4785608702422137',
  standalone: true,
  templateUrl: './app-4785608702422137.component.html',
  styleUrl: './app-4785608702422137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4785608702422137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
