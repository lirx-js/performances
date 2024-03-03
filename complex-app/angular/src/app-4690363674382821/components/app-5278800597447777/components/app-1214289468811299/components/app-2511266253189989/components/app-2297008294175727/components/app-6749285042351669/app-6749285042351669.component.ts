import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6749285042351669',
  standalone: true,
  templateUrl: './app-6749285042351669.component.html',
  styleUrl: './app-6749285042351669.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6749285042351669Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
