import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6608567745157403',
  standalone: true,
  templateUrl: './app-6608567745157403.component.html',
  styleUrl: './app-6608567745157403.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6608567745157403Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
