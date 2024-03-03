import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1284342869385463',
  standalone: true,
  templateUrl: './app-1284342869385463.component.html',
  styleUrl: './app-1284342869385463.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1284342869385463Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
