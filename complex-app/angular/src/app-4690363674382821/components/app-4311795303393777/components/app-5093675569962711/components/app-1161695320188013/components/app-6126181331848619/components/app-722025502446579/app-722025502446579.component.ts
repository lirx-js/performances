import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-722025502446579',
  standalone: true,
  templateUrl: './app-722025502446579.component.html',
  styleUrl: './app-722025502446579.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App722025502446579Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
