import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5232140652004205',
  standalone: true,
  templateUrl: './app-5232140652004205.component.html',
  styleUrl: './app-5232140652004205.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5232140652004205Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
