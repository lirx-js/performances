import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4100417022044619',
  standalone: true,
  templateUrl: './app-4100417022044619.component.html',
  styleUrl: './app-4100417022044619.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4100417022044619Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
