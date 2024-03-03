import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2973637681923603',
  standalone: true,
  templateUrl: './app-2973637681923603.component.html',
  styleUrl: './app-2973637681923603.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2973637681923603Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
