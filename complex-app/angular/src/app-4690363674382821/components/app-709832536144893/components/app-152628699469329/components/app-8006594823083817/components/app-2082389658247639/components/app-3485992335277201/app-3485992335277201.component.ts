import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3485992335277201',
  standalone: true,
  templateUrl: './app-3485992335277201.component.html',
  styleUrl: './app-3485992335277201.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3485992335277201Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
