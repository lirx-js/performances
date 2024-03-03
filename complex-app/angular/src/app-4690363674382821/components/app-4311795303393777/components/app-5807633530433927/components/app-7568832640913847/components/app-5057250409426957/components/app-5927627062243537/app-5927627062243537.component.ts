import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5927627062243537',
  standalone: true,
  templateUrl: './app-5927627062243537.component.html',
  styleUrl: './app-5927627062243537.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5927627062243537Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
