import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-348545223568485',
  standalone: true,
  templateUrl: './app-348545223568485.component.html',
  styleUrl: './app-348545223568485.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App348545223568485Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
