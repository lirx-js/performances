import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2641573757871749',
  standalone: true,
  templateUrl: './app-2641573757871749.component.html',
  styleUrl: './app-2641573757871749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2641573757871749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
