import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8467476150199053',
  standalone: true,
  templateUrl: './app-8467476150199053.component.html',
  styleUrl: './app-8467476150199053.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8467476150199053Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
