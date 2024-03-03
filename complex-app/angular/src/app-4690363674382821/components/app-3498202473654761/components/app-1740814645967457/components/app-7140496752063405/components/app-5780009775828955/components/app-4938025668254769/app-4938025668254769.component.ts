import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4938025668254769',
  standalone: true,
  templateUrl: './app-4938025668254769.component.html',
  styleUrl: './app-4938025668254769.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4938025668254769Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
