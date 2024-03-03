import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-740360795076193',
  standalone: true,
  templateUrl: './app-740360795076193.component.html',
  styleUrl: './app-740360795076193.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App740360795076193Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
