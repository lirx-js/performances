import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6287436420215189',
  standalone: true,
  templateUrl: './app-6287436420215189.component.html',
  styleUrl: './app-6287436420215189.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6287436420215189Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
