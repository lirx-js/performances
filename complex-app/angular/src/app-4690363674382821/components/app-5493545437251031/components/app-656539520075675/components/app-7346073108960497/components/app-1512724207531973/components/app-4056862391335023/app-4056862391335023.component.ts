import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4056862391335023',
  standalone: true,
  templateUrl: './app-4056862391335023.component.html',
  styleUrl: './app-4056862391335023.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4056862391335023Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
