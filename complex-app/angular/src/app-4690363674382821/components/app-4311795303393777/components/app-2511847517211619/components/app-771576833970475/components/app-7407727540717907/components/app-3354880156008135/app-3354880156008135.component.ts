import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3354880156008135',
  standalone: true,
  templateUrl: './app-3354880156008135.component.html',
  styleUrl: './app-3354880156008135.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3354880156008135Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
