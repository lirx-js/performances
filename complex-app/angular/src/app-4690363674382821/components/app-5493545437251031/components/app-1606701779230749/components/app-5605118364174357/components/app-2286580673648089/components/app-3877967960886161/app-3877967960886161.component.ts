import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3877967960886161',
  standalone: true,
  templateUrl: './app-3877967960886161.component.html',
  styleUrl: './app-3877967960886161.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3877967960886161Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
