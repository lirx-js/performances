import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-519328049790997',
  standalone: true,
  templateUrl: './app-519328049790997.component.html',
  styleUrl: './app-519328049790997.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App519328049790997Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
