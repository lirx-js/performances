import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7771178136358011',
  standalone: true,
  templateUrl: './app-7771178136358011.component.html',
  styleUrl: './app-7771178136358011.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7771178136358011Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
