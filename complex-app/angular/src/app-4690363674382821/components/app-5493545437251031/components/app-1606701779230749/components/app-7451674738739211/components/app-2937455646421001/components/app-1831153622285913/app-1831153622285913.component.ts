import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1831153622285913',
  standalone: true,
  templateUrl: './app-1831153622285913.component.html',
  styleUrl: './app-1831153622285913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1831153622285913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
