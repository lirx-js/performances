import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7230376223461211',
  standalone: true,
  templateUrl: './app-7230376223461211.component.html',
  styleUrl: './app-7230376223461211.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7230376223461211Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
