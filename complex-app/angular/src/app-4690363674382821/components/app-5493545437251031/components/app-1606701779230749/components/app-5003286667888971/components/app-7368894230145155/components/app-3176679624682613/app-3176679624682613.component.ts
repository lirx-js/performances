import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3176679624682613',
  standalone: true,
  templateUrl: './app-3176679624682613.component.html',
  styleUrl: './app-3176679624682613.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3176679624682613Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
