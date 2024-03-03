import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7955973752114827',
  standalone: true,
  templateUrl: './app-7955973752114827.component.html',
  styleUrl: './app-7955973752114827.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7955973752114827Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
