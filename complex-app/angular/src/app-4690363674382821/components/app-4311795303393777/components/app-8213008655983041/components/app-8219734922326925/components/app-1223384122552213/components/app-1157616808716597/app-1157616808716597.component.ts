import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1157616808716597',
  standalone: true,
  templateUrl: './app-1157616808716597.component.html',
  styleUrl: './app-1157616808716597.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1157616808716597Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
