import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-893282706644535',
  standalone: true,
  templateUrl: './app-893282706644535.component.html',
  styleUrl: './app-893282706644535.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App893282706644535Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
