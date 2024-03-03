import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3047992211900011',
  standalone: true,
  templateUrl: './app-3047992211900011.component.html',
  styleUrl: './app-3047992211900011.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3047992211900011Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
