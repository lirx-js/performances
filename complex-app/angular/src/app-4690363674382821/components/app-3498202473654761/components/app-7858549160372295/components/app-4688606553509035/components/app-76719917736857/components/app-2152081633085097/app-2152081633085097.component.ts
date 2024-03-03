import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2152081633085097',
  standalone: true,
  templateUrl: './app-2152081633085097.component.html',
  styleUrl: './app-2152081633085097.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2152081633085097Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
