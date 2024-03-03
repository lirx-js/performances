import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7769705873598625',
  standalone: true,
  templateUrl: './app-7769705873598625.component.html',
  styleUrl: './app-7769705873598625.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7769705873598625Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
