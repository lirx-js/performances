import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2508206547886121',
  standalone: true,
  templateUrl: './app-2508206547886121.component.html',
  styleUrl: './app-2508206547886121.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2508206547886121Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
