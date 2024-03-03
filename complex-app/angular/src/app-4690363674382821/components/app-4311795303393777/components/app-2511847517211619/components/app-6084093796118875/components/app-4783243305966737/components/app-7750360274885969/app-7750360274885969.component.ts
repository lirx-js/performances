import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7750360274885969',
  standalone: true,
  templateUrl: './app-7750360274885969.component.html',
  styleUrl: './app-7750360274885969.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7750360274885969Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
