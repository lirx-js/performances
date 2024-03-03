import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5114762350125219',
  standalone: true,
  templateUrl: './app-5114762350125219.component.html',
  styleUrl: './app-5114762350125219.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5114762350125219Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
