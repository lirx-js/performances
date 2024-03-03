import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1544280111019493',
  standalone: true,
  templateUrl: './app-1544280111019493.component.html',
  styleUrl: './app-1544280111019493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1544280111019493Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
