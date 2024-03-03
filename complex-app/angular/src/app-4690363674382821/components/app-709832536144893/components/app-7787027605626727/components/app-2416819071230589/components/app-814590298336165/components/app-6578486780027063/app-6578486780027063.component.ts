import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6578486780027063',
  standalone: true,
  templateUrl: './app-6578486780027063.component.html',
  styleUrl: './app-6578486780027063.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6578486780027063Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
