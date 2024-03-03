import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-449084856970157',
  standalone: true,
  templateUrl: './app-449084856970157.component.html',
  styleUrl: './app-449084856970157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App449084856970157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
