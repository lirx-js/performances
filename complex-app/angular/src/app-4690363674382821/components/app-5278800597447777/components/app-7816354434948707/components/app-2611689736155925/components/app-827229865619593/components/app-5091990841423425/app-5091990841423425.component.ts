import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5091990841423425',
  standalone: true,
  templateUrl: './app-5091990841423425.component.html',
  styleUrl: './app-5091990841423425.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5091990841423425Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
