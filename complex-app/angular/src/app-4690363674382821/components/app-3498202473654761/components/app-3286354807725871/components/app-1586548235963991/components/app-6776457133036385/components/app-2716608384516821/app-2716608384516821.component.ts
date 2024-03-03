import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2716608384516821',
  standalone: true,
  templateUrl: './app-2716608384516821.component.html',
  styleUrl: './app-2716608384516821.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2716608384516821Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
