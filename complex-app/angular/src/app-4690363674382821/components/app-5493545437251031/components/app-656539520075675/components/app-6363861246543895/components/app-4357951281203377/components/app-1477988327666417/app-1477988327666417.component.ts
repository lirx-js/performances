import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1477988327666417',
  standalone: true,
  templateUrl: './app-1477988327666417.component.html',
  styleUrl: './app-1477988327666417.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1477988327666417Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
