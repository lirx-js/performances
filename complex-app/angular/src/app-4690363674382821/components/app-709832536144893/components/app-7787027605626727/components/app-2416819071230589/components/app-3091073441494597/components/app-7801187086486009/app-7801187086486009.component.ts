import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7801187086486009',
  standalone: true,
  templateUrl: './app-7801187086486009.component.html',
  styleUrl: './app-7801187086486009.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7801187086486009Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
