import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5234224496221993',
  standalone: true,
  templateUrl: './app-5234224496221993.component.html',
  styleUrl: './app-5234224496221993.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5234224496221993Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
