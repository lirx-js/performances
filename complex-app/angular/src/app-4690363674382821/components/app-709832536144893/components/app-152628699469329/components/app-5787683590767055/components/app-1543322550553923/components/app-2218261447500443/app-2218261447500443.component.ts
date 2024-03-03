import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2218261447500443',
  standalone: true,
  templateUrl: './app-2218261447500443.component.html',
  styleUrl: './app-2218261447500443.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2218261447500443Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
