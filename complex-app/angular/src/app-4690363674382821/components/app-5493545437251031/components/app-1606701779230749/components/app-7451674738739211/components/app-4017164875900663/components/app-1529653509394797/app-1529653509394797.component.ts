import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1529653509394797',
  standalone: true,
  templateUrl: './app-1529653509394797.component.html',
  styleUrl: './app-1529653509394797.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1529653509394797Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
