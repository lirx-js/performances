import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7320890057763881',
  standalone: true,
  templateUrl: './app-7320890057763881.component.html',
  styleUrl: './app-7320890057763881.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7320890057763881Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
