import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6810465238529939',
  standalone: true,
  templateUrl: './app-6810465238529939.component.html',
  styleUrl: './app-6810465238529939.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6810465238529939Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
