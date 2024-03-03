import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5230623426742499',
  standalone: true,
  templateUrl: './app-5230623426742499.component.html',
  styleUrl: './app-5230623426742499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5230623426742499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
