import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2258503713173931',
  standalone: true,
  templateUrl: './app-2258503713173931.component.html',
  styleUrl: './app-2258503713173931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2258503713173931Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
