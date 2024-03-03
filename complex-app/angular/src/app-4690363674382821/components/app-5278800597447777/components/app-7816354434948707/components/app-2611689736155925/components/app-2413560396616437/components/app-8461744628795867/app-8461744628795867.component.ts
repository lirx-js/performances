import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8461744628795867',
  standalone: true,
  templateUrl: './app-8461744628795867.component.html',
  styleUrl: './app-8461744628795867.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8461744628795867Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
