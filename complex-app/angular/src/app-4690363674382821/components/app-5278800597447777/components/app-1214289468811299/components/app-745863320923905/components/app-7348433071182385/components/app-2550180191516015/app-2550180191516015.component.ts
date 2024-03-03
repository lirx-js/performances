import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2550180191516015',
  standalone: true,
  templateUrl: './app-2550180191516015.component.html',
  styleUrl: './app-2550180191516015.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2550180191516015Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
