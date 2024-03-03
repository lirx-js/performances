import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8128511119511699',
  standalone: true,
  templateUrl: './app-8128511119511699.component.html',
  styleUrl: './app-8128511119511699.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8128511119511699Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
