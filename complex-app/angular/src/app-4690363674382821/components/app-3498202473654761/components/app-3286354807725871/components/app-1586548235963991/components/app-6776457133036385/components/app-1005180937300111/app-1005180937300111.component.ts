import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1005180937300111',
  standalone: true,
  templateUrl: './app-1005180937300111.component.html',
  styleUrl: './app-1005180937300111.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1005180937300111Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
