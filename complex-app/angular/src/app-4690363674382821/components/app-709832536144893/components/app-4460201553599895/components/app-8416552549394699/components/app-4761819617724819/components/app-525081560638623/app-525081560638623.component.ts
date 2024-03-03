import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-525081560638623',
  standalone: true,
  templateUrl: './app-525081560638623.component.html',
  styleUrl: './app-525081560638623.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App525081560638623Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
