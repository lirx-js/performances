import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2618798367069005',
  standalone: true,
  templateUrl: './app-2618798367069005.component.html',
  styleUrl: './app-2618798367069005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2618798367069005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
