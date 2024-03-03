import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8287864963910749',
  standalone: true,
  templateUrl: './app-8287864963910749.component.html',
  styleUrl: './app-8287864963910749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8287864963910749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
