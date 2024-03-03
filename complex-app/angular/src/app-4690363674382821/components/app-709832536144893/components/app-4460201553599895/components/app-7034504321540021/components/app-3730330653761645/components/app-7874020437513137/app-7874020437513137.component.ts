import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7874020437513137',
  standalone: true,
  templateUrl: './app-7874020437513137.component.html',
  styleUrl: './app-7874020437513137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7874020437513137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
