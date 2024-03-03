import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2049364689820585',
  standalone: true,
  templateUrl: './app-2049364689820585.component.html',
  styleUrl: './app-2049364689820585.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2049364689820585Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
