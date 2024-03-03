import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2670520029156405',
  standalone: true,
  templateUrl: './app-2670520029156405.component.html',
  styleUrl: './app-2670520029156405.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2670520029156405Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
