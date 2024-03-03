import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5112328562042447',
  standalone: true,
  templateUrl: './app-5112328562042447.component.html',
  styleUrl: './app-5112328562042447.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5112328562042447Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
