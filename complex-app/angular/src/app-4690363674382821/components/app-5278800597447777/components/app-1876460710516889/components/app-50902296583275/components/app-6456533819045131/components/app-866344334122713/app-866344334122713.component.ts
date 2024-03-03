import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-866344334122713',
  standalone: true,
  templateUrl: './app-866344334122713.component.html',
  styleUrl: './app-866344334122713.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App866344334122713Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
