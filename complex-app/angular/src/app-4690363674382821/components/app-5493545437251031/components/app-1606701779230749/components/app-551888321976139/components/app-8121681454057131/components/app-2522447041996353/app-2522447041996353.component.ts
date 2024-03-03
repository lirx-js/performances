import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2522447041996353',
  standalone: true,
  templateUrl: './app-2522447041996353.component.html',
  styleUrl: './app-2522447041996353.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2522447041996353Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
