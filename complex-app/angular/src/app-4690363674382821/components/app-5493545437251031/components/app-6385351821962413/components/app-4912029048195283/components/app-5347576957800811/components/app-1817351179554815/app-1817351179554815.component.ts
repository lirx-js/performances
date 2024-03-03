import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1817351179554815',
  standalone: true,
  templateUrl: './app-1817351179554815.component.html',
  styleUrl: './app-1817351179554815.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1817351179554815Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
