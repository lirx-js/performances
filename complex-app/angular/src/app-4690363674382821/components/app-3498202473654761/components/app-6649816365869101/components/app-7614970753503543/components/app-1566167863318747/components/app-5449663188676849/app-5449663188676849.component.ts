import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5449663188676849',
  standalone: true,
  templateUrl: './app-5449663188676849.component.html',
  styleUrl: './app-5449663188676849.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5449663188676849Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
