import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1114087104579707',
  standalone: true,
  templateUrl: './app-1114087104579707.component.html',
  styleUrl: './app-1114087104579707.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1114087104579707Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
