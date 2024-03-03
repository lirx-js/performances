import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2495758576124535',
  standalone: true,
  templateUrl: './app-2495758576124535.component.html',
  styleUrl: './app-2495758576124535.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2495758576124535Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
