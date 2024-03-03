import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7835202192360941',
  standalone: true,
  templateUrl: './app-7835202192360941.component.html',
  styleUrl: './app-7835202192360941.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7835202192360941Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
