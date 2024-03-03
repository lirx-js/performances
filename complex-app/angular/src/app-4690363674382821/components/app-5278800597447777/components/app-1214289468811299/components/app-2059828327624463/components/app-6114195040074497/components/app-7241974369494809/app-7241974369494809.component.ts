import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7241974369494809',
  standalone: true,
  templateUrl: './app-7241974369494809.component.html',
  styleUrl: './app-7241974369494809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7241974369494809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
