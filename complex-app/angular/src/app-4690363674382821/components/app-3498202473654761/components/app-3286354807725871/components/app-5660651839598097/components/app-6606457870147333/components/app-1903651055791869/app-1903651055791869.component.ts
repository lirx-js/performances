import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1903651055791869',
  standalone: true,
  templateUrl: './app-1903651055791869.component.html',
  styleUrl: './app-1903651055791869.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1903651055791869Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
