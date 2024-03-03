import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-749869495667139',
  standalone: true,
  templateUrl: './app-749869495667139.component.html',
  styleUrl: './app-749869495667139.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App749869495667139Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
