import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7416625417760041',
  standalone: true,
  templateUrl: './app-7416625417760041.component.html',
  styleUrl: './app-7416625417760041.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7416625417760041Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
