import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3897685633548359',
  standalone: true,
  templateUrl: './app-3897685633548359.component.html',
  styleUrl: './app-3897685633548359.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3897685633548359Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
