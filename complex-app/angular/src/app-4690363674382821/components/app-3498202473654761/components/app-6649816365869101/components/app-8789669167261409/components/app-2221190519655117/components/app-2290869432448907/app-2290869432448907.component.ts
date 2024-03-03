import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2290869432448907',
  standalone: true,
  templateUrl: './app-2290869432448907.component.html',
  styleUrl: './app-2290869432448907.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2290869432448907Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
