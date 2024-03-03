import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4755922398023009',
  standalone: true,
  templateUrl: './app-4755922398023009.component.html',
  styleUrl: './app-4755922398023009.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4755922398023009Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
