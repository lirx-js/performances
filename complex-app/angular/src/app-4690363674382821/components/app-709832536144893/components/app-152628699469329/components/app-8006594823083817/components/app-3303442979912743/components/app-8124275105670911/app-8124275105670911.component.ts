import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8124275105670911',
  standalone: true,
  templateUrl: './app-8124275105670911.component.html',
  styleUrl: './app-8124275105670911.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8124275105670911Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
