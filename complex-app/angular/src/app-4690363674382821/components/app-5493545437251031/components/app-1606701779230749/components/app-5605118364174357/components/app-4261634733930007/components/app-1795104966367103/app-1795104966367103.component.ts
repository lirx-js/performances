import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1795104966367103',
  standalone: true,
  templateUrl: './app-1795104966367103.component.html',
  styleUrl: './app-1795104966367103.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1795104966367103Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
