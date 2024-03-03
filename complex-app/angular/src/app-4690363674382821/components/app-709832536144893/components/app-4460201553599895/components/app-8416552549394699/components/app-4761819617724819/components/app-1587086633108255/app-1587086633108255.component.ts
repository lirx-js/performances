import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1587086633108255',
  standalone: true,
  templateUrl: './app-1587086633108255.component.html',
  styleUrl: './app-1587086633108255.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1587086633108255Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
