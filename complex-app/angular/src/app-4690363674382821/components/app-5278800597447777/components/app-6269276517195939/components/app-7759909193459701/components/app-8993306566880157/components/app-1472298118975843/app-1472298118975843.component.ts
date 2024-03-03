import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1472298118975843',
  standalone: true,
  templateUrl: './app-1472298118975843.component.html',
  styleUrl: './app-1472298118975843.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1472298118975843Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
