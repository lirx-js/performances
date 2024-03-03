import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-433024486009807',
  standalone: true,
  templateUrl: './app-433024486009807.component.html',
  styleUrl: './app-433024486009807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App433024486009807Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
