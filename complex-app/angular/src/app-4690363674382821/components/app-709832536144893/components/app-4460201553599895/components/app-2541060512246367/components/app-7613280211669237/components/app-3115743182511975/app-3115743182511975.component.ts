import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3115743182511975',
  standalone: true,
  templateUrl: './app-3115743182511975.component.html',
  styleUrl: './app-3115743182511975.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3115743182511975Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
