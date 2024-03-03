import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3041805116630467',
  standalone: true,
  templateUrl: './app-3041805116630467.component.html',
  styleUrl: './app-3041805116630467.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3041805116630467Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
