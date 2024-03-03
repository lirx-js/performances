import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3389820866584391',
  standalone: true,
  templateUrl: './app-3389820866584391.component.html',
  styleUrl: './app-3389820866584391.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3389820866584391Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
