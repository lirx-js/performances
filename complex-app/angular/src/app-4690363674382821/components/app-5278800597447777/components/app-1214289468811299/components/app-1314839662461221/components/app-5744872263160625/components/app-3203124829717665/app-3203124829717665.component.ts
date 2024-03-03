import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3203124829717665',
  standalone: true,
  templateUrl: './app-3203124829717665.component.html',
  styleUrl: './app-3203124829717665.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3203124829717665Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
