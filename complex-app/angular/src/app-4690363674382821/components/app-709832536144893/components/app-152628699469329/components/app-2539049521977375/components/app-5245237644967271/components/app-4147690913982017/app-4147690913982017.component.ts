import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4147690913982017',
  standalone: true,
  templateUrl: './app-4147690913982017.component.html',
  styleUrl: './app-4147690913982017.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4147690913982017Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
