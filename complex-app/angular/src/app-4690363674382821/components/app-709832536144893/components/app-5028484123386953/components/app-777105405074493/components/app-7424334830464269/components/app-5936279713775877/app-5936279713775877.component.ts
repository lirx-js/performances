import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5936279713775877',
  standalone: true,
  templateUrl: './app-5936279713775877.component.html',
  styleUrl: './app-5936279713775877.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5936279713775877Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
