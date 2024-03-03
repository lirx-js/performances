import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3049226506939493',
  standalone: true,
  templateUrl: './app-3049226506939493.component.html',
  styleUrl: './app-3049226506939493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3049226506939493Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
