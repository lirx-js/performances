import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4949700122742197',
  standalone: true,
  templateUrl: './app-4949700122742197.component.html',
  styleUrl: './app-4949700122742197.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4949700122742197Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
