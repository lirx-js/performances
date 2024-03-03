import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4150619730182771',
  standalone: true,
  templateUrl: './app-4150619730182771.component.html',
  styleUrl: './app-4150619730182771.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4150619730182771Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
