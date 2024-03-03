import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4310747262386895',
  standalone: true,
  templateUrl: './app-4310747262386895.component.html',
  styleUrl: './app-4310747262386895.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4310747262386895Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
