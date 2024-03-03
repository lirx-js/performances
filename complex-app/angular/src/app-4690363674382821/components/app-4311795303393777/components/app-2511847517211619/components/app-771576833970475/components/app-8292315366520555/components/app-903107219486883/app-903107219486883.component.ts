import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-903107219486883',
  standalone: true,
  templateUrl: './app-903107219486883.component.html',
  styleUrl: './app-903107219486883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App903107219486883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
