import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-323645727566415',
  standalone: true,
  templateUrl: './app-323645727566415.component.html',
  styleUrl: './app-323645727566415.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App323645727566415Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
