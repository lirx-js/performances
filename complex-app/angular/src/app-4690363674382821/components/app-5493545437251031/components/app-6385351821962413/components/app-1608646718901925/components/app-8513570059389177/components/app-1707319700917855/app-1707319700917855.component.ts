import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1707319700917855',
  standalone: true,
  templateUrl: './app-1707319700917855.component.html',
  styleUrl: './app-1707319700917855.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1707319700917855Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
