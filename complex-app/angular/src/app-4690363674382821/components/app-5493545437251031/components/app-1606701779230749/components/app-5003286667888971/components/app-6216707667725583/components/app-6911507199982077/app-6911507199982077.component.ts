import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6911507199982077',
  standalone: true,
  templateUrl: './app-6911507199982077.component.html',
  styleUrl: './app-6911507199982077.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6911507199982077Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
