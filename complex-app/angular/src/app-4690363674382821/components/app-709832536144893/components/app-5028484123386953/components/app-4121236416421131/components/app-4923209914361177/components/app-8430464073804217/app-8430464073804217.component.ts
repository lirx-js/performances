import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8430464073804217',
  standalone: true,
  templateUrl: './app-8430464073804217.component.html',
  styleUrl: './app-8430464073804217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8430464073804217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
