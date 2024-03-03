import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1694851041327975',
  standalone: true,
  templateUrl: './app-1694851041327975.component.html',
  styleUrl: './app-1694851041327975.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1694851041327975Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
