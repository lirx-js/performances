import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-591010152708647',
  standalone: true,
  templateUrl: './app-591010152708647.component.html',
  styleUrl: './app-591010152708647.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App591010152708647Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
