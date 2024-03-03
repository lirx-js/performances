import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6609873335063585',
  standalone: true,
  templateUrl: './app-6609873335063585.component.html',
  styleUrl: './app-6609873335063585.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6609873335063585Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
