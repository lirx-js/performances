import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4345157185386095',
  standalone: true,
  templateUrl: './app-4345157185386095.component.html',
  styleUrl: './app-4345157185386095.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4345157185386095Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
