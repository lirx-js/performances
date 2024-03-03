import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8673175468684995',
  standalone: true,
  templateUrl: './app-8673175468684995.component.html',
  styleUrl: './app-8673175468684995.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8673175468684995Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
