import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7021119263940907',
  standalone: true,
  templateUrl: './app-7021119263940907.component.html',
  styleUrl: './app-7021119263940907.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7021119263940907Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
