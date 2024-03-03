import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3505716367865075',
  standalone: true,
  templateUrl: './app-3505716367865075.component.html',
  styleUrl: './app-3505716367865075.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3505716367865075Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
