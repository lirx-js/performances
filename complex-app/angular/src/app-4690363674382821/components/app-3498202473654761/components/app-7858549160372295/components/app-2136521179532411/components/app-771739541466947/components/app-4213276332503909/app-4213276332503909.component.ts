import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4213276332503909',
  standalone: true,
  templateUrl: './app-4213276332503909.component.html',
  styleUrl: './app-4213276332503909.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4213276332503909Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
