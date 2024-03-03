import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3503732790058439',
  standalone: true,
  templateUrl: './app-3503732790058439.component.html',
  styleUrl: './app-3503732790058439.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3503732790058439Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
