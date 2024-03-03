import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7909078481790609',
  standalone: true,
  templateUrl: './app-7909078481790609.component.html',
  styleUrl: './app-7909078481790609.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7909078481790609Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
