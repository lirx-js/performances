import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2672898623144117',
  standalone: true,
  templateUrl: './app-2672898623144117.component.html',
  styleUrl: './app-2672898623144117.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2672898623144117Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
