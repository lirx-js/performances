import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8420634477615011',
  standalone: true,
  templateUrl: './app-8420634477615011.component.html',
  styleUrl: './app-8420634477615011.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8420634477615011Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
