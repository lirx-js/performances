import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2319788634071803',
  standalone: true,
  templateUrl: './app-2319788634071803.component.html',
  styleUrl: './app-2319788634071803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2319788634071803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
