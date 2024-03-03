import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5134973878306465',
  standalone: true,
  templateUrl: './app-5134973878306465.component.html',
  styleUrl: './app-5134973878306465.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5134973878306465Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
