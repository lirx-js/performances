import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7031069236347477',
  standalone: true,
  templateUrl: './app-7031069236347477.component.html',
  styleUrl: './app-7031069236347477.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7031069236347477Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
