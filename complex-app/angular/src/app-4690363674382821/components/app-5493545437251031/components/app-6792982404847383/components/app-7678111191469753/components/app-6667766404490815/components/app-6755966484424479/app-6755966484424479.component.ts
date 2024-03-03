import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6755966484424479',
  standalone: true,
  templateUrl: './app-6755966484424479.component.html',
  styleUrl: './app-6755966484424479.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6755966484424479Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
