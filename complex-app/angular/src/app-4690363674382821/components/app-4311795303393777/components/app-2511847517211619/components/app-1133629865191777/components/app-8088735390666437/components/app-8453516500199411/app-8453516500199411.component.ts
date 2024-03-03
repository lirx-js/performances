import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8453516500199411',
  standalone: true,
  templateUrl: './app-8453516500199411.component.html',
  styleUrl: './app-8453516500199411.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8453516500199411Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
