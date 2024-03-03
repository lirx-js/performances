import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1541174534347005',
  standalone: true,
  templateUrl: './app-1541174534347005.component.html',
  styleUrl: './app-1541174534347005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1541174534347005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
