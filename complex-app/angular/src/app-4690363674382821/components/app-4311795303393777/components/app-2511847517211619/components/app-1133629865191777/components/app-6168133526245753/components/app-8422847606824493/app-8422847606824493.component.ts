import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8422847606824493',
  standalone: true,
  templateUrl: './app-8422847606824493.component.html',
  styleUrl: './app-8422847606824493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8422847606824493Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
