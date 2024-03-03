import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3793354793764663',
  standalone: true,
  templateUrl: './app-3793354793764663.component.html',
  styleUrl: './app-3793354793764663.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3793354793764663Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
