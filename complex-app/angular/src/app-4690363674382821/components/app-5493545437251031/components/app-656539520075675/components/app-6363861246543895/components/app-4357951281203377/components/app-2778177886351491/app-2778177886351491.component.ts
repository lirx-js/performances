import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2778177886351491',
  standalone: true,
  templateUrl: './app-2778177886351491.component.html',
  styleUrl: './app-2778177886351491.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2778177886351491Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
