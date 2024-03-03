import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5235731266615227',
  standalone: true,
  templateUrl: './app-5235731266615227.component.html',
  styleUrl: './app-5235731266615227.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5235731266615227Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
