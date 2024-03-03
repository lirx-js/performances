import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3341841012801993',
  standalone: true,
  templateUrl: './app-3341841012801993.component.html',
  styleUrl: './app-3341841012801993.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3341841012801993Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
