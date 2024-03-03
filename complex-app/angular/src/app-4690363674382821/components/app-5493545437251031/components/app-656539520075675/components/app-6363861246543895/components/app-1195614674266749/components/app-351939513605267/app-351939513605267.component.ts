import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-351939513605267',
  standalone: true,
  templateUrl: './app-351939513605267.component.html',
  styleUrl: './app-351939513605267.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App351939513605267Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
