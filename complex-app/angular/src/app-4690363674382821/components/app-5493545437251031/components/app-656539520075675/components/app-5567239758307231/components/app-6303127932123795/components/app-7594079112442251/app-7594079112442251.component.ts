import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7594079112442251',
  standalone: true,
  templateUrl: './app-7594079112442251.component.html',
  styleUrl: './app-7594079112442251.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7594079112442251Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
