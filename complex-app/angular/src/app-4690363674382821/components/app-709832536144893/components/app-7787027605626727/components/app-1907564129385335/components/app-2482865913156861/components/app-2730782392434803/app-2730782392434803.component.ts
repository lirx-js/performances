import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2730782392434803',
  standalone: true,
  templateUrl: './app-2730782392434803.component.html',
  styleUrl: './app-2730782392434803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2730782392434803Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
