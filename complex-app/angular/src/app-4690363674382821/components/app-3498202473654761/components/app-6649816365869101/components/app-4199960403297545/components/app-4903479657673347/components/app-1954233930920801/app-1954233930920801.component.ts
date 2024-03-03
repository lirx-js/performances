import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1954233930920801',
  standalone: true,
  templateUrl: './app-1954233930920801.component.html',
  styleUrl: './app-1954233930920801.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1954233930920801Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
