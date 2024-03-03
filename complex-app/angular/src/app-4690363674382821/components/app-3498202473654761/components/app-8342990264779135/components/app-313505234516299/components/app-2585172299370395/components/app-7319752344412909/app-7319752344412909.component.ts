import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7319752344412909',
  standalone: true,
  templateUrl: './app-7319752344412909.component.html',
  styleUrl: './app-7319752344412909.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7319752344412909Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
