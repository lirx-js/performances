import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5303062251919951',
  standalone: true,
  templateUrl: './app-5303062251919951.component.html',
  styleUrl: './app-5303062251919951.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5303062251919951Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
