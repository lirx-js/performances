import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7393997931549817',
  standalone: true,
  templateUrl: './app-7393997931549817.component.html',
  styleUrl: './app-7393997931549817.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7393997931549817Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
