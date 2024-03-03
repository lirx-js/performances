import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5208418716684243',
  standalone: true,
  templateUrl: './app-5208418716684243.component.html',
  styleUrl: './app-5208418716684243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5208418716684243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
