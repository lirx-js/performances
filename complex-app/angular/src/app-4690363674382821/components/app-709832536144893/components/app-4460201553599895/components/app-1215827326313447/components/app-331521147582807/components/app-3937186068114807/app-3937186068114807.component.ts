import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3937186068114807',
  standalone: true,
  templateUrl: './app-3937186068114807.component.html',
  styleUrl: './app-3937186068114807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3937186068114807Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
