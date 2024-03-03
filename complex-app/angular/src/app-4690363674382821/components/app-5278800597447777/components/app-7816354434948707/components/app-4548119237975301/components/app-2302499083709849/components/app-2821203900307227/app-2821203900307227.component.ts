import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2821203900307227',
  standalone: true,
  templateUrl: './app-2821203900307227.component.html',
  styleUrl: './app-2821203900307227.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2821203900307227Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
