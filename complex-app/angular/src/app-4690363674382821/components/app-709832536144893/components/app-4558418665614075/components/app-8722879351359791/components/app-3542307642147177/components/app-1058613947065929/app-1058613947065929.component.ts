import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1058613947065929',
  standalone: true,
  templateUrl: './app-1058613947065929.component.html',
  styleUrl: './app-1058613947065929.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1058613947065929Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
