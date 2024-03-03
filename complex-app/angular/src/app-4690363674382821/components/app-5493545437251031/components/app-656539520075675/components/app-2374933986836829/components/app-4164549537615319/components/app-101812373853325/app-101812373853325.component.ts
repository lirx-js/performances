import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-101812373853325',
  standalone: true,
  templateUrl: './app-101812373853325.component.html',
  styleUrl: './app-101812373853325.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App101812373853325Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
