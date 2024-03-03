import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1283742915959271',
  standalone: true,
  templateUrl: './app-1283742915959271.component.html',
  styleUrl: './app-1283742915959271.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1283742915959271Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
