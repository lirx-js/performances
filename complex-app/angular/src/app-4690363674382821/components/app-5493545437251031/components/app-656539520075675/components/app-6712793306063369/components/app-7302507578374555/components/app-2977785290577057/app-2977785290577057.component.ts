import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2977785290577057',
  standalone: true,
  templateUrl: './app-2977785290577057.component.html',
  styleUrl: './app-2977785290577057.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2977785290577057Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
