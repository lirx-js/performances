import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4063805346329661',
  standalone: true,
  templateUrl: './app-4063805346329661.component.html',
  styleUrl: './app-4063805346329661.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4063805346329661Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
