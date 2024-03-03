import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-651634835414659',
  standalone: true,
  templateUrl: './app-651634835414659.component.html',
  styleUrl: './app-651634835414659.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App651634835414659Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
