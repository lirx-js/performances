import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4326910758817337',
  standalone: true,
  templateUrl: './app-4326910758817337.component.html',
  styleUrl: './app-4326910758817337.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4326910758817337Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
