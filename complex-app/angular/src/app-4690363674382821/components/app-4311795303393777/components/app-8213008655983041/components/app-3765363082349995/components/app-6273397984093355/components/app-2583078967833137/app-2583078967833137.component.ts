import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2583078967833137',
  standalone: true,
  templateUrl: './app-2583078967833137.component.html',
  styleUrl: './app-2583078967833137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2583078967833137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
