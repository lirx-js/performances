import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5325472872117215',
  standalone: true,
  templateUrl: './app-5325472872117215.component.html',
  styleUrl: './app-5325472872117215.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5325472872117215Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
