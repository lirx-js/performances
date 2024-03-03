import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-471004804273091',
  standalone: true,
  templateUrl: './app-471004804273091.component.html',
  styleUrl: './app-471004804273091.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App471004804273091Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
