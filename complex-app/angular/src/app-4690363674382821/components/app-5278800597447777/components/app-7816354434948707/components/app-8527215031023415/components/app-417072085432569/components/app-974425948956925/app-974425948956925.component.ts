import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-974425948956925',
  standalone: true,
  templateUrl: './app-974425948956925.component.html',
  styleUrl: './app-974425948956925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App974425948956925Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
