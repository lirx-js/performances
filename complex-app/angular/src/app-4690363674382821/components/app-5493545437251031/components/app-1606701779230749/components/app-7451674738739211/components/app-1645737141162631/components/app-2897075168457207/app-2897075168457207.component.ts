import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2897075168457207',
  standalone: true,
  templateUrl: './app-2897075168457207.component.html',
  styleUrl: './app-2897075168457207.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2897075168457207Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
