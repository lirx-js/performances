import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-404242305733437',
  standalone: true,
  templateUrl: './app-404242305733437.component.html',
  styleUrl: './app-404242305733437.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App404242305733437Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
