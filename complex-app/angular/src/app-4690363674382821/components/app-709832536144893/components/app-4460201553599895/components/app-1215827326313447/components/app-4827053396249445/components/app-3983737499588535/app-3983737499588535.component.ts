import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3983737499588535',
  standalone: true,
  templateUrl: './app-3983737499588535.component.html',
  styleUrl: './app-3983737499588535.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3983737499588535Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
