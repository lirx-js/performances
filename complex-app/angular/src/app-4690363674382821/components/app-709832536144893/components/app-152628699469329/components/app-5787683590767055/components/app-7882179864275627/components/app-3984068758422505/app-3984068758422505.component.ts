import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3984068758422505',
  standalone: true,
  templateUrl: './app-3984068758422505.component.html',
  styleUrl: './app-3984068758422505.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3984068758422505Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
