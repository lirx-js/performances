import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6451293705759403',
  standalone: true,
  templateUrl: './app-6451293705759403.component.html',
  styleUrl: './app-6451293705759403.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6451293705759403Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
