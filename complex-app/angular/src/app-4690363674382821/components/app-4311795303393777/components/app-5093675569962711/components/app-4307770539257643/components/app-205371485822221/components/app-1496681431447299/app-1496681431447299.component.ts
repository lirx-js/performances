import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1496681431447299',
  standalone: true,
  templateUrl: './app-1496681431447299.component.html',
  styleUrl: './app-1496681431447299.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1496681431447299Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
