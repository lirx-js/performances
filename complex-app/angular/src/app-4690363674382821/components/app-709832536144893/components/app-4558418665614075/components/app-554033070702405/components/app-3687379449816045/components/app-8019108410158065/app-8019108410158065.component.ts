import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8019108410158065',
  standalone: true,
  templateUrl: './app-8019108410158065.component.html',
  styleUrl: './app-8019108410158065.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8019108410158065Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
