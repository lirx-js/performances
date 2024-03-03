import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5480040565948531',
  standalone: true,
  templateUrl: './app-5480040565948531.component.html',
  styleUrl: './app-5480040565948531.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5480040565948531Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
