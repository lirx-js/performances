import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8227536581974085',
  standalone: true,
  templateUrl: './app-8227536581974085.component.html',
  styleUrl: './app-8227536581974085.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8227536581974085Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
