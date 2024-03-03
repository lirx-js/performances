import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2781246348392273',
  standalone: true,
  templateUrl: './app-2781246348392273.component.html',
  styleUrl: './app-2781246348392273.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2781246348392273Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
