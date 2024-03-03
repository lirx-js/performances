import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2426504423606937',
  standalone: true,
  templateUrl: './app-2426504423606937.component.html',
  styleUrl: './app-2426504423606937.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2426504423606937Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
