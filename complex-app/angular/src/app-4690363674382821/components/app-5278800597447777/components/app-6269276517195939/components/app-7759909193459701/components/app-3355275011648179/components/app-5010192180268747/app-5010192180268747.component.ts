import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5010192180268747',
  standalone: true,
  templateUrl: './app-5010192180268747.component.html',
  styleUrl: './app-5010192180268747.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5010192180268747Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
