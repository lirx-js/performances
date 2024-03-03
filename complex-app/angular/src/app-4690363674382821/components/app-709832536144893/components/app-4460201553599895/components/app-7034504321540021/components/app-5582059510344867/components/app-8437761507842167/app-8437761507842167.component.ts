import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8437761507842167',
  standalone: true,
  templateUrl: './app-8437761507842167.component.html',
  styleUrl: './app-8437761507842167.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8437761507842167Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
