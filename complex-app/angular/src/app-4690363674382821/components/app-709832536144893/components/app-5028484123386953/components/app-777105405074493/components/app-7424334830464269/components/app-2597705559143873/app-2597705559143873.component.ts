import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2597705559143873',
  standalone: true,
  templateUrl: './app-2597705559143873.component.html',
  styleUrl: './app-2597705559143873.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2597705559143873Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
