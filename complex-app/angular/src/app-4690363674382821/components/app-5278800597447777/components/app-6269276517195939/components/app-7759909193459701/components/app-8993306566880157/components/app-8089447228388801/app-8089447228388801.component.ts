import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8089447228388801',
  standalone: true,
  templateUrl: './app-8089447228388801.component.html',
  styleUrl: './app-8089447228388801.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8089447228388801Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
