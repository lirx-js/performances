import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7453272893978049',
  standalone: true,
  templateUrl: './app-7453272893978049.component.html',
  styleUrl: './app-7453272893978049.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7453272893978049Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
