import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-74627925660343',
  standalone: true,
  templateUrl: './app-74627925660343.component.html',
  styleUrl: './app-74627925660343.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App74627925660343Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
