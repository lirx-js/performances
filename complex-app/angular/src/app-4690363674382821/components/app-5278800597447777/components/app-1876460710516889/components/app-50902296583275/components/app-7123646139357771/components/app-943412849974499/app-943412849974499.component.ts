import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-943412849974499',
  standalone: true,
  templateUrl: './app-943412849974499.component.html',
  styleUrl: './app-943412849974499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App943412849974499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
