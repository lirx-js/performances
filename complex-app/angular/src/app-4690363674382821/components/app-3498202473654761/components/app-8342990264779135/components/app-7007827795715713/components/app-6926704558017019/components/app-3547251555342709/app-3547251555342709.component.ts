import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3547251555342709',
  standalone: true,
  templateUrl: './app-3547251555342709.component.html',
  styleUrl: './app-3547251555342709.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3547251555342709Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
