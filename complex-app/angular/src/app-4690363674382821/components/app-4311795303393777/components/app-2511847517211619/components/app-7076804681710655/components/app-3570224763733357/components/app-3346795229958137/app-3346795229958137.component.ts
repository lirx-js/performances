import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3346795229958137',
  standalone: true,
  templateUrl: './app-3346795229958137.component.html',
  styleUrl: './app-3346795229958137.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3346795229958137Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
