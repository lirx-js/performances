import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2889910480302419',
  standalone: true,
  templateUrl: './app-2889910480302419.component.html',
  styleUrl: './app-2889910480302419.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2889910480302419Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
