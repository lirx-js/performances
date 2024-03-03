import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2198026514105769',
  standalone: true,
  templateUrl: './app-2198026514105769.component.html',
  styleUrl: './app-2198026514105769.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2198026514105769Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
