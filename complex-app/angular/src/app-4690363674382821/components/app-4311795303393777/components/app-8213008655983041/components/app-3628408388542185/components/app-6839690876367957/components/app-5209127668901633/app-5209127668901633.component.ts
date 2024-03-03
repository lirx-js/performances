import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5209127668901633',
  standalone: true,
  templateUrl: './app-5209127668901633.component.html',
  styleUrl: './app-5209127668901633.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5209127668901633Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
