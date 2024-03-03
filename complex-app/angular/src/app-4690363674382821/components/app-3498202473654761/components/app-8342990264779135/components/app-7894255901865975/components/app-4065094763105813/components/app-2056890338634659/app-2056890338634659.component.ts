import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2056890338634659',
  standalone: true,
  templateUrl: './app-2056890338634659.component.html',
  styleUrl: './app-2056890338634659.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2056890338634659Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
