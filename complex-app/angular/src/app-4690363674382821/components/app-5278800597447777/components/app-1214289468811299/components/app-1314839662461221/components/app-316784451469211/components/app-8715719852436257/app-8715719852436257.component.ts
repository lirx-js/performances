import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8715719852436257',
  standalone: true,
  templateUrl: './app-8715719852436257.component.html',
  styleUrl: './app-8715719852436257.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8715719852436257Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
