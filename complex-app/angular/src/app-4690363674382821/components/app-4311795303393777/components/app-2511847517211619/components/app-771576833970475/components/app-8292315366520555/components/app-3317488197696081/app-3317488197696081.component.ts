import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3317488197696081',
  standalone: true,
  templateUrl: './app-3317488197696081.component.html',
  styleUrl: './app-3317488197696081.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3317488197696081Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
