import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4218415215397003',
  standalone: true,
  templateUrl: './app-4218415215397003.component.html',
  styleUrl: './app-4218415215397003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4218415215397003Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
