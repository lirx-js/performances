import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7283382023174953',
  standalone: true,
  templateUrl: './app-7283382023174953.component.html',
  styleUrl: './app-7283382023174953.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7283382023174953Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
