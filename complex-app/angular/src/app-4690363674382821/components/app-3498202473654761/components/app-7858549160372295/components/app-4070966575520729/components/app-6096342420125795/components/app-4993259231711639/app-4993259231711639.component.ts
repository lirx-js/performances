import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4993259231711639',
  standalone: true,
  templateUrl: './app-4993259231711639.component.html',
  styleUrl: './app-4993259231711639.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4993259231711639Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
