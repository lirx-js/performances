import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7658998773620643',
  standalone: true,
  templateUrl: './app-7658998773620643.component.html',
  styleUrl: './app-7658998773620643.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7658998773620643Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
