import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2072636122480577',
  standalone: true,
  templateUrl: './app-2072636122480577.component.html',
  styleUrl: './app-2072636122480577.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2072636122480577Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
