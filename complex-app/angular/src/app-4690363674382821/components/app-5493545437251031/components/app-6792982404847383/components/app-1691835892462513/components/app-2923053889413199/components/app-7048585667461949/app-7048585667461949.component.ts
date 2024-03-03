import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7048585667461949',
  standalone: true,
  templateUrl: './app-7048585667461949.component.html',
  styleUrl: './app-7048585667461949.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7048585667461949Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
