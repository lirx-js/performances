import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4481650430185781',
  standalone: true,
  templateUrl: './app-4481650430185781.component.html',
  styleUrl: './app-4481650430185781.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4481650430185781Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
