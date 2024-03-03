import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4582068743941',
  standalone: true,
  templateUrl: './app-4582068743941.component.html',
  styleUrl: './app-4582068743941.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4582068743941Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
