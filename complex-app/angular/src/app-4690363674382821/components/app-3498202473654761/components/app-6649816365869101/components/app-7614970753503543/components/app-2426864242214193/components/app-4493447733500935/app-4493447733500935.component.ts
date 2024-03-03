import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4493447733500935',
  standalone: true,
  templateUrl: './app-4493447733500935.component.html',
  styleUrl: './app-4493447733500935.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4493447733500935Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
