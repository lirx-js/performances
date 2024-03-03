import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2073056626200451',
  standalone: true,
  templateUrl: './app-2073056626200451.component.html',
  styleUrl: './app-2073056626200451.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2073056626200451Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
