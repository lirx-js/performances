import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8351486061099807',
  standalone: true,
  templateUrl: './app-8351486061099807.component.html',
  styleUrl: './app-8351486061099807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8351486061099807Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
