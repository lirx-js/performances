import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3333801524469737',
  standalone: true,
  templateUrl: './app-3333801524469737.component.html',
  styleUrl: './app-3333801524469737.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3333801524469737Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
