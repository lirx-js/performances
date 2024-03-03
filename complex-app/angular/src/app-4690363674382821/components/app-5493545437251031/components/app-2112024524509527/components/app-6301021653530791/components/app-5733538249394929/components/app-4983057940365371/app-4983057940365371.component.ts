import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4983057940365371',
  standalone: true,
  templateUrl: './app-4983057940365371.component.html',
  styleUrl: './app-4983057940365371.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4983057940365371Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
