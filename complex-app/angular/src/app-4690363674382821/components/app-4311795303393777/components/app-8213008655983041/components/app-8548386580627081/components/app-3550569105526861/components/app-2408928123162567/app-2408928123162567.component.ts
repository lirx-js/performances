import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2408928123162567',
  standalone: true,
  templateUrl: './app-2408928123162567.component.html',
  styleUrl: './app-2408928123162567.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2408928123162567Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
