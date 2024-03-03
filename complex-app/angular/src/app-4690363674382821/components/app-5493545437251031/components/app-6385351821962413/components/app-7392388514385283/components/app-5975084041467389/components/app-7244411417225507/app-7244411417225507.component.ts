import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7244411417225507',
  standalone: true,
  templateUrl: './app-7244411417225507.component.html',
  styleUrl: './app-7244411417225507.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7244411417225507Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
