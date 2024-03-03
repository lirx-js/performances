import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2643342897513611',
  standalone: true,
  templateUrl: './app-2643342897513611.component.html',
  styleUrl: './app-2643342897513611.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2643342897513611Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
