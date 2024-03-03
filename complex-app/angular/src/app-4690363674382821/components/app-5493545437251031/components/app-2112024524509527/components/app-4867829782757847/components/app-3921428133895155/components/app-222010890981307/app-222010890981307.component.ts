import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-222010890981307',
  standalone: true,
  templateUrl: './app-222010890981307.component.html',
  styleUrl: './app-222010890981307.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App222010890981307Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
