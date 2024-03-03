import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4008138436575989',
  standalone: true,
  templateUrl: './app-4008138436575989.component.html',
  styleUrl: './app-4008138436575989.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4008138436575989Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
