import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1867857219332189',
  standalone: true,
  templateUrl: './app-1867857219332189.component.html',
  styleUrl: './app-1867857219332189.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1867857219332189Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
