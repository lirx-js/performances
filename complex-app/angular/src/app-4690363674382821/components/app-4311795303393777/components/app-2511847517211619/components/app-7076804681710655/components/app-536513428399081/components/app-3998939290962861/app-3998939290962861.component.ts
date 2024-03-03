import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3998939290962861',
  standalone: true,
  templateUrl: './app-3998939290962861.component.html',
  styleUrl: './app-3998939290962861.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3998939290962861Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
