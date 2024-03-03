import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6447902018459983',
  standalone: true,
  templateUrl: './app-6447902018459983.component.html',
  styleUrl: './app-6447902018459983.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6447902018459983Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
