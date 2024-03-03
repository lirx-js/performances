import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2611970937544447',
  standalone: true,
  templateUrl: './app-2611970937544447.component.html',
  styleUrl: './app-2611970937544447.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2611970937544447Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
