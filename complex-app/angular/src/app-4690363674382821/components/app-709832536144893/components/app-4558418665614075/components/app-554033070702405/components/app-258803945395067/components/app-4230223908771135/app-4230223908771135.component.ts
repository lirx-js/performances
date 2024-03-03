import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4230223908771135',
  standalone: true,
  templateUrl: './app-4230223908771135.component.html',
  styleUrl: './app-4230223908771135.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4230223908771135Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
