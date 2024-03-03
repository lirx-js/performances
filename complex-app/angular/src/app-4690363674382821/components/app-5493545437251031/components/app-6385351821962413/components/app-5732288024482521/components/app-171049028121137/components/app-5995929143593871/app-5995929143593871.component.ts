import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5995929143593871',
  standalone: true,
  templateUrl: './app-5995929143593871.component.html',
  styleUrl: './app-5995929143593871.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5995929143593871Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
