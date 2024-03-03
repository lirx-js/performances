import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7687415491042267',
  standalone: true,
  templateUrl: './app-7687415491042267.component.html',
  styleUrl: './app-7687415491042267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7687415491042267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
