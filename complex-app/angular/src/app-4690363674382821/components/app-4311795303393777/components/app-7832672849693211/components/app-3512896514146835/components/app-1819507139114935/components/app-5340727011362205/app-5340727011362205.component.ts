import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5340727011362205',
  standalone: true,
  templateUrl: './app-5340727011362205.component.html',
  styleUrl: './app-5340727011362205.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5340727011362205Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
