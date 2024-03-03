import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5970449064445483',
  standalone: true,
  templateUrl: './app-5970449064445483.component.html',
  styleUrl: './app-5970449064445483.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5970449064445483Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
