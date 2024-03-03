import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4698185532951137',
  standalone: true,
  templateUrl: './app-4698185532951137.component.html',
  styleUrl: './app-4698185532951137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4698185532951137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
