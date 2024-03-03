import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4157954531391057',
  standalone: true,
  templateUrl: './app-4157954531391057.component.html',
  styleUrl: './app-4157954531391057.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4157954531391057Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
