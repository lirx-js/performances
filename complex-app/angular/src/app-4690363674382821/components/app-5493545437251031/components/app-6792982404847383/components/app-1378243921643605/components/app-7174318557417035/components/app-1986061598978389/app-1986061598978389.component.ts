import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1986061598978389',
  standalone: true,
  templateUrl: './app-1986061598978389.component.html',
  styleUrl: './app-1986061598978389.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1986061598978389Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
