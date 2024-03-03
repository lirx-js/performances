import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7355945177297101',
  standalone: true,
  templateUrl: './app-7355945177297101.component.html',
  styleUrl: './app-7355945177297101.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7355945177297101Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
