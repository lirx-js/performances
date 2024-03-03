import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3746898466148901',
  standalone: true,
  templateUrl: './app-3746898466148901.component.html',
  styleUrl: './app-3746898466148901.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3746898466148901Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
