import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3361082936119187',
  standalone: true,
  templateUrl: './app-3361082936119187.component.html',
  styleUrl: './app-3361082936119187.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3361082936119187Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
