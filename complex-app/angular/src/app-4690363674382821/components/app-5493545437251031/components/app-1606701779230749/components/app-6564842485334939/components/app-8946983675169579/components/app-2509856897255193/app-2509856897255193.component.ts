import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2509856897255193',
  standalone: true,
  templateUrl: './app-2509856897255193.component.html',
  styleUrl: './app-2509856897255193.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2509856897255193Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
