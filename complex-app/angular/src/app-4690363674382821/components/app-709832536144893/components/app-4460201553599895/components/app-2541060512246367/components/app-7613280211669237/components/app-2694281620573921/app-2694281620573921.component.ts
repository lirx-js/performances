import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2694281620573921',
  standalone: true,
  templateUrl: './app-2694281620573921.component.html',
  styleUrl: './app-2694281620573921.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2694281620573921Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
