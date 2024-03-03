import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8840010748475267',
  standalone: true,
  templateUrl: './app-8840010748475267.component.html',
  styleUrl: './app-8840010748475267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8840010748475267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}