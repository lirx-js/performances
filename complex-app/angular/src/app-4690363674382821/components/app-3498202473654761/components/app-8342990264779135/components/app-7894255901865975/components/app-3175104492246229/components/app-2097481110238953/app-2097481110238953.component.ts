import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2097481110238953',
  standalone: true,
  templateUrl: './app-2097481110238953.component.html',
  styleUrl: './app-2097481110238953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2097481110238953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
