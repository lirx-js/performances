import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4974692078690347',
  standalone: true,
  templateUrl: './app-4974692078690347.component.html',
  styleUrl: './app-4974692078690347.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4974692078690347Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
