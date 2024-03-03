import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1062434222486043',
  standalone: true,
  templateUrl: './app-1062434222486043.component.html',
  styleUrl: './app-1062434222486043.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1062434222486043Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
