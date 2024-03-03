import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1659383730964175',
  standalone: true,
  templateUrl: './app-1659383730964175.component.html',
  styleUrl: './app-1659383730964175.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1659383730964175Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
