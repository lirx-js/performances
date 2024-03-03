import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2700418034450673',
  standalone: true,
  templateUrl: './app-2700418034450673.component.html',
  styleUrl: './app-2700418034450673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2700418034450673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
