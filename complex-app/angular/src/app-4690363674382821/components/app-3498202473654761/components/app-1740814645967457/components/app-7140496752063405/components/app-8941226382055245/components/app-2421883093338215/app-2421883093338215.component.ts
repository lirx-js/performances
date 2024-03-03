import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2421883093338215',
  standalone: true,
  templateUrl: './app-2421883093338215.component.html',
  styleUrl: './app-2421883093338215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2421883093338215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
