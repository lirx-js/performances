import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1807392500173393',
  standalone: true,
  templateUrl: './app-1807392500173393.component.html',
  styleUrl: './app-1807392500173393.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1807392500173393Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
