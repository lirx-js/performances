import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2218957755257787',
  standalone: true,
  templateUrl: './app-2218957755257787.component.html',
  styleUrl: './app-2218957755257787.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2218957755257787Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
