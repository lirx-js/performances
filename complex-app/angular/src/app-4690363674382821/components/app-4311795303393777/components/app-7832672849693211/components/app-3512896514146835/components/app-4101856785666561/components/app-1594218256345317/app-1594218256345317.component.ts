import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1594218256345317',
  standalone: true,
  templateUrl: './app-1594218256345317.component.html',
  styleUrl: './app-1594218256345317.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1594218256345317Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
