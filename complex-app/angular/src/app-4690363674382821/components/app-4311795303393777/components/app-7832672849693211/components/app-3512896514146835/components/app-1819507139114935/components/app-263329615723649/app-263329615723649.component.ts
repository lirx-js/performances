import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-263329615723649',
  standalone: true,
  templateUrl: './app-263329615723649.component.html',
  styleUrl: './app-263329615723649.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App263329615723649Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
