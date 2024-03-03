import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5412322846808689',
  standalone: true,
  templateUrl: './app-5412322846808689.component.html',
  styleUrl: './app-5412322846808689.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5412322846808689Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
