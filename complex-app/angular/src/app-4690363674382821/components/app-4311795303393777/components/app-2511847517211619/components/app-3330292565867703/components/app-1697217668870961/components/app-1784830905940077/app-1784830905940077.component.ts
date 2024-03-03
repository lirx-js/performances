import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1784830905940077',
  standalone: true,
  templateUrl: './app-1784830905940077.component.html',
  styleUrl: './app-1784830905940077.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1784830905940077Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
