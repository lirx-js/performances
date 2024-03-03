import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5380262094795005',
  standalone: true,
  templateUrl: './app-5380262094795005.component.html',
  styleUrl: './app-5380262094795005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5380262094795005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
