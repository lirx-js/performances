import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1134684400422121',
  standalone: true,
  templateUrl: './app-1134684400422121.component.html',
  styleUrl: './app-1134684400422121.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1134684400422121Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
