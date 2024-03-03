import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2889461099098455',
  standalone: true,
  templateUrl: './app-2889461099098455.component.html',
  styleUrl: './app-2889461099098455.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2889461099098455Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
