import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-114878874600475',
  standalone: true,
  templateUrl: './app-114878874600475.component.html',
  styleUrl: './app-114878874600475.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App114878874600475Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
