import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1550622383598189',
  standalone: true,
  templateUrl: './app-1550622383598189.component.html',
  styleUrl: './app-1550622383598189.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1550622383598189Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
