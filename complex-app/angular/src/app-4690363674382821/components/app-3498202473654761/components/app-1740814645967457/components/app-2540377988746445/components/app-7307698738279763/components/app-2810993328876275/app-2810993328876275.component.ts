import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2810993328876275',
  standalone: true,
  templateUrl: './app-2810993328876275.component.html',
  styleUrl: './app-2810993328876275.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2810993328876275Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
