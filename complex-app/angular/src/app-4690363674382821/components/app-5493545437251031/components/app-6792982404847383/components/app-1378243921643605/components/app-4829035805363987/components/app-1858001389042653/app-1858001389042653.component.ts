import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1858001389042653',
  standalone: true,
  templateUrl: './app-1858001389042653.component.html',
  styleUrl: './app-1858001389042653.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1858001389042653Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
