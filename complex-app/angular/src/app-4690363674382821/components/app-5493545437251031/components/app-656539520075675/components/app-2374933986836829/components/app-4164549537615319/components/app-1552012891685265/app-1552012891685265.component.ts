import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1552012891685265',
  standalone: true,
  templateUrl: './app-1552012891685265.component.html',
  styleUrl: './app-1552012891685265.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1552012891685265Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
