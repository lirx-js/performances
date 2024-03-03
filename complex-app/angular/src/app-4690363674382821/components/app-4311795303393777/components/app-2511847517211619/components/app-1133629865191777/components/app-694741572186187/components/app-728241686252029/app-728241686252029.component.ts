import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-728241686252029',
  standalone: true,
  templateUrl: './app-728241686252029.component.html',
  styleUrl: './app-728241686252029.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App728241686252029Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
