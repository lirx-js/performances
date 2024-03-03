import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8531889826545605',
  standalone: true,
  templateUrl: './app-8531889826545605.component.html',
  styleUrl: './app-8531889826545605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8531889826545605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
