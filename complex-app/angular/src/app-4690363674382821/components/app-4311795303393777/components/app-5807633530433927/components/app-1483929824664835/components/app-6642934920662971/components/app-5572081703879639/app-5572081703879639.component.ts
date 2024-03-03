import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5572081703879639',
  standalone: true,
  templateUrl: './app-5572081703879639.component.html',
  styleUrl: './app-5572081703879639.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5572081703879639Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
