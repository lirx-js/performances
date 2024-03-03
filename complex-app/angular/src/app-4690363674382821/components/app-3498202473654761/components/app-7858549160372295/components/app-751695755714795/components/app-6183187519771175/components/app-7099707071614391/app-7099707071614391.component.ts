import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7099707071614391',
  standalone: true,
  templateUrl: './app-7099707071614391.component.html',
  styleUrl: './app-7099707071614391.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7099707071614391Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
