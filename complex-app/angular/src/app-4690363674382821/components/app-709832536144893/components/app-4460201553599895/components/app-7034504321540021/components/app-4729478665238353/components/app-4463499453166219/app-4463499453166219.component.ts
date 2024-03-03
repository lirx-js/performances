import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4463499453166219',
  standalone: true,
  templateUrl: './app-4463499453166219.component.html',
  styleUrl: './app-4463499453166219.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4463499453166219Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
