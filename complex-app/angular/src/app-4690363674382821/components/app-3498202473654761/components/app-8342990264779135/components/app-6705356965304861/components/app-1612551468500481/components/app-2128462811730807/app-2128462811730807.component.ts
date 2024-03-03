import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2128462811730807',
  standalone: true,
  templateUrl: './app-2128462811730807.component.html',
  styleUrl: './app-2128462811730807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2128462811730807Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
