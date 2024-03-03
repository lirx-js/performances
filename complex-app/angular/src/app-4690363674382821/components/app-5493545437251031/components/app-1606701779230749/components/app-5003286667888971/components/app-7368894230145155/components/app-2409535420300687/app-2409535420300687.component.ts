import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2409535420300687',
  standalone: true,
  templateUrl: './app-2409535420300687.component.html',
  styleUrl: './app-2409535420300687.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2409535420300687Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
