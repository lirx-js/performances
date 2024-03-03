import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8842954119995339',
  standalone: true,
  templateUrl: './app-8842954119995339.component.html',
  styleUrl: './app-8842954119995339.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8842954119995339Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
