import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5665119531515507',
  standalone: true,
  templateUrl: './app-5665119531515507.component.html',
  styleUrl: './app-5665119531515507.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5665119531515507Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
