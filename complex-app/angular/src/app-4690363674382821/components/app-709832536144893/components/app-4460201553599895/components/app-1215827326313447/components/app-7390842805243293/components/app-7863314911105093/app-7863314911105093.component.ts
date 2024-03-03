import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7863314911105093',
  standalone: true,
  templateUrl: './app-7863314911105093.component.html',
  styleUrl: './app-7863314911105093.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7863314911105093Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
