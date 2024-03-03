import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3306002545176085',
  standalone: true,
  templateUrl: './app-3306002545176085.component.html',
  styleUrl: './app-3306002545176085.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3306002545176085Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
