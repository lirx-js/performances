import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8418376443453897',
  standalone: true,
  templateUrl: './app-8418376443453897.component.html',
  styleUrl: './app-8418376443453897.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8418376443453897Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
