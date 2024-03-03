import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3426137004303289',
  standalone: true,
  templateUrl: './app-3426137004303289.component.html',
  styleUrl: './app-3426137004303289.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3426137004303289Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
