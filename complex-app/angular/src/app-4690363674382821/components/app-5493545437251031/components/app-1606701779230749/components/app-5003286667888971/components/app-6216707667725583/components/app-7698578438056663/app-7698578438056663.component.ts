import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7698578438056663',
  standalone: true,
  templateUrl: './app-7698578438056663.component.html',
  styleUrl: './app-7698578438056663.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7698578438056663Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
