import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4150481561818147',
  standalone: true,
  templateUrl: './app-4150481561818147.component.html',
  styleUrl: './app-4150481561818147.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4150481561818147Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
