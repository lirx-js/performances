import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3412574277243489',
  standalone: true,
  templateUrl: './app-3412574277243489.component.html',
  styleUrl: './app-3412574277243489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3412574277243489Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
