import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7776305808623093',
  standalone: true,
  templateUrl: './app-7776305808623093.component.html',
  styleUrl: './app-7776305808623093.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7776305808623093Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
