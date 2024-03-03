import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5626352738624001',
  standalone: true,
  templateUrl: './app-5626352738624001.component.html',
  styleUrl: './app-5626352738624001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5626352738624001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
