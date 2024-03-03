import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5410296375384289',
  standalone: true,
  templateUrl: './app-5410296375384289.component.html',
  styleUrl: './app-5410296375384289.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5410296375384289Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
