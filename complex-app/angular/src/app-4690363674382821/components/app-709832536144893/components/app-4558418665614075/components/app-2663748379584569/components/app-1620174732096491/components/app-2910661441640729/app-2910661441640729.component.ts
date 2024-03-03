import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2910661441640729',
  standalone: true,
  templateUrl: './app-2910661441640729.component.html',
  styleUrl: './app-2910661441640729.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2910661441640729Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
