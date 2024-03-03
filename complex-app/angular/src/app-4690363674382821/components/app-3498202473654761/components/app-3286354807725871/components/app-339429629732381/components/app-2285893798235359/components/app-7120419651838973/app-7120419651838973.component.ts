import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7120419651838973',
  standalone: true,
  templateUrl: './app-7120419651838973.component.html',
  styleUrl: './app-7120419651838973.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7120419651838973Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
