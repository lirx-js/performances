import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7388860789388359',
  standalone: true,
  templateUrl: './app-7388860789388359.component.html',
  styleUrl: './app-7388860789388359.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7388860789388359Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
