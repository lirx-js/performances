import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5125899040394239',
  standalone: true,
  templateUrl: './app-5125899040394239.component.html',
  styleUrl: './app-5125899040394239.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5125899040394239Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
