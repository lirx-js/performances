import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2491183398724173',
  standalone: true,
  templateUrl: './app-2491183398724173.component.html',
  styleUrl: './app-2491183398724173.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2491183398724173Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
