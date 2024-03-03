import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2976120256482091',
  standalone: true,
  templateUrl: './app-2976120256482091.component.html',
  styleUrl: './app-2976120256482091.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2976120256482091Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
