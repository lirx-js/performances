import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-297373744763813',
  standalone: true,
  templateUrl: './app-297373744763813.component.html',
  styleUrl: './app-297373744763813.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App297373744763813Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
