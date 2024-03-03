import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-740610456557683',
  standalone: true,
  templateUrl: './app-740610456557683.component.html',
  styleUrl: './app-740610456557683.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App740610456557683Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
