import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5286480388397813',
  standalone: true,
  templateUrl: './app-5286480388397813.component.html',
  styleUrl: './app-5286480388397813.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5286480388397813Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
