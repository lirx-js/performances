import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5329292669300689',
  standalone: true,
  templateUrl: './app-5329292669300689.component.html',
  styleUrl: './app-5329292669300689.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5329292669300689Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
