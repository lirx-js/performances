import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7928714147331619',
  standalone: true,
  templateUrl: './app-7928714147331619.component.html',
  styleUrl: './app-7928714147331619.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7928714147331619Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
