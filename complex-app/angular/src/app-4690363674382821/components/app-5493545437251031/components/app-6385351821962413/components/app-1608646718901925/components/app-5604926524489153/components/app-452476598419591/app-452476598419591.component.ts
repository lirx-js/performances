import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-452476598419591',
  standalone: true,
  templateUrl: './app-452476598419591.component.html',
  styleUrl: './app-452476598419591.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App452476598419591Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
