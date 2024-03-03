import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4817133199949995',
  standalone: true,
  templateUrl: './app-4817133199949995.component.html',
  styleUrl: './app-4817133199949995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4817133199949995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
