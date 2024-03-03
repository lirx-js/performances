import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3317185868353721',
  standalone: true,
  templateUrl: './app-3317185868353721.component.html',
  styleUrl: './app-3317185868353721.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3317185868353721Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
