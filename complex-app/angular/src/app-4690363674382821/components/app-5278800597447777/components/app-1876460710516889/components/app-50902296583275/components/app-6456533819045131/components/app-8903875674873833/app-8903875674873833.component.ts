import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8903875674873833',
  standalone: true,
  templateUrl: './app-8903875674873833.component.html',
  styleUrl: './app-8903875674873833.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8903875674873833Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
