import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2704116078124541',
  standalone: true,
  templateUrl: './app-2704116078124541.component.html',
  styleUrl: './app-2704116078124541.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2704116078124541Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
