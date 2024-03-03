import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7134495912556107',
  standalone: true,
  templateUrl: './app-7134495912556107.component.html',
  styleUrl: './app-7134495912556107.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7134495912556107Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
