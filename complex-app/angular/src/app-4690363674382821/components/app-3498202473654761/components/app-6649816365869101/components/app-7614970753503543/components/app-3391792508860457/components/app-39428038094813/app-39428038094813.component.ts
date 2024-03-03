import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-39428038094813',
  standalone: true,
  templateUrl: './app-39428038094813.component.html',
  styleUrl: './app-39428038094813.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App39428038094813Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
