import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7754272520461707',
  standalone: true,
  templateUrl: './app-7754272520461707.component.html',
  styleUrl: './app-7754272520461707.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7754272520461707Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
