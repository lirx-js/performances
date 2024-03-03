import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7281048066683597',
  standalone: true,
  templateUrl: './app-7281048066683597.component.html',
  styleUrl: './app-7281048066683597.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7281048066683597Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
