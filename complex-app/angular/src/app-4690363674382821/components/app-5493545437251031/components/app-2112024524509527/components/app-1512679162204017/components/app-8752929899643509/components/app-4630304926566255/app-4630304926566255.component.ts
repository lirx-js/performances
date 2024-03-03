import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4630304926566255',
  standalone: true,
  templateUrl: './app-4630304926566255.component.html',
  styleUrl: './app-4630304926566255.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4630304926566255Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
