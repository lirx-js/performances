import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2962463465859869',
  standalone: true,
  templateUrl: './app-2962463465859869.component.html',
  styleUrl: './app-2962463465859869.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2962463465859869Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
