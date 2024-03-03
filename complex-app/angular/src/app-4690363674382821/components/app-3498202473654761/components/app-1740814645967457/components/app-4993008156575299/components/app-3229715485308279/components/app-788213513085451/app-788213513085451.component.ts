import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-788213513085451',
  standalone: true,
  templateUrl: './app-788213513085451.component.html',
  styleUrl: './app-788213513085451.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App788213513085451Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
