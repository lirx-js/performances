import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2601611031820719',
  standalone: true,
  templateUrl: './app-2601611031820719.component.html',
  styleUrl: './app-2601611031820719.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2601611031820719Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
