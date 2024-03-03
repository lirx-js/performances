import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-787038420582103',
  standalone: true,
  templateUrl: './app-787038420582103.component.html',
  styleUrl: './app-787038420582103.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App787038420582103Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
