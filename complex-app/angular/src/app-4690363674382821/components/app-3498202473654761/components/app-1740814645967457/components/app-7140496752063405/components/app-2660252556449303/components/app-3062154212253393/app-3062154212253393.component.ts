import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3062154212253393',
  standalone: true,
  templateUrl: './app-3062154212253393.component.html',
  styleUrl: './app-3062154212253393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3062154212253393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
