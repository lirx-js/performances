import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-975901910184439',
  standalone: true,
  templateUrl: './app-975901910184439.component.html',
  styleUrl: './app-975901910184439.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App975901910184439Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
