import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3101286807359437',
  standalone: true,
  templateUrl: './app-3101286807359437.component.html',
  styleUrl: './app-3101286807359437.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3101286807359437Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
