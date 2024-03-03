import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1980811273558869',
  standalone: true,
  templateUrl: './app-1980811273558869.component.html',
  styleUrl: './app-1980811273558869.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1980811273558869Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
