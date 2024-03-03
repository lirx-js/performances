import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6006957740205725',
  standalone: true,
  templateUrl: './app-6006957740205725.component.html',
  styleUrl: './app-6006957740205725.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6006957740205725Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
