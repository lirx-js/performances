import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-794744460347451',
  standalone: true,
  templateUrl: './app-794744460347451.component.html',
  styleUrl: './app-794744460347451.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App794744460347451Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
