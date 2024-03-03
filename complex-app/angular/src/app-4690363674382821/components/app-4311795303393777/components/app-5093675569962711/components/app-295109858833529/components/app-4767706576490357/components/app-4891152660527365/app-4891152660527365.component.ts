import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4891152660527365',
  standalone: true,
  templateUrl: './app-4891152660527365.component.html',
  styleUrl: './app-4891152660527365.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4891152660527365Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
