import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-964635157958905',
  standalone: true,
  templateUrl: './app-964635157958905.component.html',
  styleUrl: './app-964635157958905.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App964635157958905Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
