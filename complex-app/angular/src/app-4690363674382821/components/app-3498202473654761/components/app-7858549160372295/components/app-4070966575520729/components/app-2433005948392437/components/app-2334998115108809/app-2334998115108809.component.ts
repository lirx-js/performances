import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2334998115108809',
  standalone: true,
  templateUrl: './app-2334998115108809.component.html',
  styleUrl: './app-2334998115108809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2334998115108809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
