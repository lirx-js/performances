import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7662854546274117',
  standalone: true,
  templateUrl: './app-7662854546274117.component.html',
  styleUrl: './app-7662854546274117.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7662854546274117Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
