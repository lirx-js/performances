import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-684744788832695',
  standalone: true,
  templateUrl: './app-684744788832695.component.html',
  styleUrl: './app-684744788832695.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App684744788832695Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
