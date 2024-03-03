import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2932661167566139',
  standalone: true,
  templateUrl: './app-2932661167566139.component.html',
  styleUrl: './app-2932661167566139.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2932661167566139Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
