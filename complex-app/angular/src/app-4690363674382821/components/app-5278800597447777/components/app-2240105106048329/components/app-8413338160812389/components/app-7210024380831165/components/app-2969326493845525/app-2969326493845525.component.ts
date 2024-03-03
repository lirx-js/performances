import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2969326493845525',
  standalone: true,
  templateUrl: './app-2969326493845525.component.html',
  styleUrl: './app-2969326493845525.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2969326493845525Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
