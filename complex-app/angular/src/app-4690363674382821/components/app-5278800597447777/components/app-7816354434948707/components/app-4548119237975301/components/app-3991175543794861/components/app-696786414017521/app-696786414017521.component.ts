import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-696786414017521',
  standalone: true,
  templateUrl: './app-696786414017521.component.html',
  styleUrl: './app-696786414017521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App696786414017521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
