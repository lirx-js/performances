import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7057018898040809',
  standalone: true,
  templateUrl: './app-7057018898040809.component.html',
  styleUrl: './app-7057018898040809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7057018898040809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
