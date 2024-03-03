import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1224288706463025',
  standalone: true,
  templateUrl: './app-1224288706463025.component.html',
  styleUrl: './app-1224288706463025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1224288706463025Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
