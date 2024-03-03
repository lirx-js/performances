import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3611221571619383',
  standalone: true,
  templateUrl: './app-3611221571619383.component.html',
  styleUrl: './app-3611221571619383.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3611221571619383Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
