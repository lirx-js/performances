import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1866380139780233',
  standalone: true,
  templateUrl: './app-1866380139780233.component.html',
  styleUrl: './app-1866380139780233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1866380139780233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
