import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8459397265128921',
  standalone: true,
  templateUrl: './app-8459397265128921.component.html',
  styleUrl: './app-8459397265128921.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8459397265128921Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
