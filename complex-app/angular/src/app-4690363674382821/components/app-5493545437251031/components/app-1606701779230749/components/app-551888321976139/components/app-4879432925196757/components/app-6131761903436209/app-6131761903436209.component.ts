import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6131761903436209',
  standalone: true,
  templateUrl: './app-6131761903436209.component.html',
  styleUrl: './app-6131761903436209.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6131761903436209Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
