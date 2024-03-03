import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3180554397804639',
  standalone: true,
  templateUrl: './app-3180554397804639.component.html',
  styleUrl: './app-3180554397804639.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3180554397804639Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
