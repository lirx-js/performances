import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2075184928123849',
  standalone: true,
  templateUrl: './app-2075184928123849.component.html',
  styleUrl: './app-2075184928123849.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2075184928123849Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
