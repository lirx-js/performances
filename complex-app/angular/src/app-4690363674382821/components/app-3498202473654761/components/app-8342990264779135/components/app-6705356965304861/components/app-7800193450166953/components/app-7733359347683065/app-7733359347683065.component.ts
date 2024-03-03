import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7733359347683065',
  standalone: true,
  templateUrl: './app-7733359347683065.component.html',
  styleUrl: './app-7733359347683065.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7733359347683065Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
