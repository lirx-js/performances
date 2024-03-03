import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6244684304537533',
  standalone: true,
  templateUrl: './app-6244684304537533.component.html',
  styleUrl: './app-6244684304537533.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6244684304537533Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
