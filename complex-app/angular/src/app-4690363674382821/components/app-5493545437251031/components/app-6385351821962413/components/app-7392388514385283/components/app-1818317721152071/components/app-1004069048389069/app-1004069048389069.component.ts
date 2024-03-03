import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1004069048389069',
  standalone: true,
  templateUrl: './app-1004069048389069.component.html',
  styleUrl: './app-1004069048389069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1004069048389069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
