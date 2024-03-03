import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5825238648968513',
  standalone: true,
  templateUrl: './app-5825238648968513.component.html',
  styleUrl: './app-5825238648968513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5825238648968513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
