import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5705924637322737',
  standalone: true,
  templateUrl: './app-5705924637322737.component.html',
  styleUrl: './app-5705924637322737.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5705924637322737Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
