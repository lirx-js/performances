import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-115039893256477',
  standalone: true,
  templateUrl: './app-115039893256477.component.html',
  styleUrl: './app-115039893256477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App115039893256477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
