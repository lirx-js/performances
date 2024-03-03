import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7758513006842903',
  standalone: true,
  templateUrl: './app-7758513006842903.component.html',
  styleUrl: './app-7758513006842903.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7758513006842903Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
