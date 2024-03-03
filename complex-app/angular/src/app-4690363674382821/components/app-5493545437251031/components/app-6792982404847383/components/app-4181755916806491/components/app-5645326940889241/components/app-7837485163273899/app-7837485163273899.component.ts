import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7837485163273899',
  standalone: true,
  templateUrl: './app-7837485163273899.component.html',
  styleUrl: './app-7837485163273899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7837485163273899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
