import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1761396833507621',
  standalone: true,
  templateUrl: './app-1761396833507621.component.html',
  styleUrl: './app-1761396833507621.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1761396833507621Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
