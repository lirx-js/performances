import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2294835759710931',
  standalone: true,
  templateUrl: './app-2294835759710931.component.html',
  styleUrl: './app-2294835759710931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2294835759710931Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
