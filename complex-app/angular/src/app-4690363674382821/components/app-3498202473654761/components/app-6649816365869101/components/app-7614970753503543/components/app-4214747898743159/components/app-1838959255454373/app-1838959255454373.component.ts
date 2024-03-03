import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1838959255454373',
  standalone: true,
  templateUrl: './app-1838959255454373.component.html',
  styleUrl: './app-1838959255454373.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1838959255454373Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
