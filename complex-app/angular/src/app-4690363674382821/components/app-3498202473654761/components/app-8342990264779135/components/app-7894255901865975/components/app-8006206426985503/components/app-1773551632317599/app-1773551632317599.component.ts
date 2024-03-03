import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1773551632317599',
  standalone: true,
  templateUrl: './app-1773551632317599.component.html',
  styleUrl: './app-1773551632317599.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1773551632317599Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
