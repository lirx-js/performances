import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8109939452321189',
  standalone: true,
  templateUrl: './app-8109939452321189.component.html',
  styleUrl: './app-8109939452321189.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8109939452321189Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
