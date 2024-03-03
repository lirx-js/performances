import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6916032750631809',
  standalone: true,
  templateUrl: './app-6916032750631809.component.html',
  styleUrl: './app-6916032750631809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6916032750631809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
