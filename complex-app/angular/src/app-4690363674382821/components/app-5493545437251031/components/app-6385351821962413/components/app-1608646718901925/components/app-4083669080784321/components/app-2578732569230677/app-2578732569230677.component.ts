import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2578732569230677',
  standalone: true,
  templateUrl: './app-2578732569230677.component.html',
  styleUrl: './app-2578732569230677.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2578732569230677Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
