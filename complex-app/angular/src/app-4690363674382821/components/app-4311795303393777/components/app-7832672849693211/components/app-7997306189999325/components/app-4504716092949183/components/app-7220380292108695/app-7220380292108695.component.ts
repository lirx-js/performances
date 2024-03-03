import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7220380292108695',
  standalone: true,
  templateUrl: './app-7220380292108695.component.html',
  styleUrl: './app-7220380292108695.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7220380292108695Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
