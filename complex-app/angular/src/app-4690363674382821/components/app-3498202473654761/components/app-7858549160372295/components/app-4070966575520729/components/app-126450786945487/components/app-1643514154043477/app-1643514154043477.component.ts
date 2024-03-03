import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1643514154043477',
  standalone: true,
  templateUrl: './app-1643514154043477.component.html',
  styleUrl: './app-1643514154043477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1643514154043477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
