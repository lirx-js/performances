import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5649792802622571',
  standalone: true,
  templateUrl: './app-5649792802622571.component.html',
  styleUrl: './app-5649792802622571.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5649792802622571Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
