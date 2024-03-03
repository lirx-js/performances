import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-793812793316087',
  standalone: true,
  templateUrl: './app-793812793316087.component.html',
  styleUrl: './app-793812793316087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App793812793316087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
