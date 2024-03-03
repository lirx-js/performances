import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6579503698539905',
  standalone: true,
  templateUrl: './app-6579503698539905.component.html',
  styleUrl: './app-6579503698539905.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6579503698539905Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
