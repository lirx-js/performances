import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7735733447007217',
  standalone: true,
  templateUrl: './app-7735733447007217.component.html',
  styleUrl: './app-7735733447007217.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7735733447007217Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
