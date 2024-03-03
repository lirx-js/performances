import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1255369664403941',
  standalone: true,
  templateUrl: './app-1255369664403941.component.html',
  styleUrl: './app-1255369664403941.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1255369664403941Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
