import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-93430690560869',
  standalone: true,
  templateUrl: './app-93430690560869.component.html',
  styleUrl: './app-93430690560869.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App93430690560869Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
