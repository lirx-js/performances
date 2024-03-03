import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6152098959668517',
  standalone: true,
  templateUrl: './app-6152098959668517.component.html',
  styleUrl: './app-6152098959668517.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6152098959668517Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
