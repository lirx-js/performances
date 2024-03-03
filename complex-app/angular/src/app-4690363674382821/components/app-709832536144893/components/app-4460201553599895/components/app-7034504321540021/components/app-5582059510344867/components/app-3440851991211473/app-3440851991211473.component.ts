import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3440851991211473',
  standalone: true,
  templateUrl: './app-3440851991211473.component.html',
  styleUrl: './app-3440851991211473.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3440851991211473Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
