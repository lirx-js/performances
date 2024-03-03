import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-99630787658715',
  standalone: true,
  templateUrl: './app-99630787658715.component.html',
  styleUrl: './app-99630787658715.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App99630787658715Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
