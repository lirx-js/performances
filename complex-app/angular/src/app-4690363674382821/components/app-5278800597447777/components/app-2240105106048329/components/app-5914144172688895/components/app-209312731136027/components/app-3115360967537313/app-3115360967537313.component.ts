import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3115360967537313',
  standalone: true,
  templateUrl: './app-3115360967537313.component.html',
  styleUrl: './app-3115360967537313.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3115360967537313Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
