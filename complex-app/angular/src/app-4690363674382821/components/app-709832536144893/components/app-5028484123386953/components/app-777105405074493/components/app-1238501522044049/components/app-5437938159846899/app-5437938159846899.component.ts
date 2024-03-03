import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5437938159846899',
  standalone: true,
  templateUrl: './app-5437938159846899.component.html',
  styleUrl: './app-5437938159846899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5437938159846899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
